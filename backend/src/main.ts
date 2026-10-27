import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module.js';
import { buildSwaggerConfig } from './config/swagger.config.js';
import { HttpExceptionFilter } from './common/filters/http-exception.filter.js';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor.js';
import { TransformInterceptor } from './common/interceptors/transform.interceptor.js';
import { ApiResponseDto } from './common/dto/api-response.dto.js';
import { ErrorResponseDto } from './common/dto/error-response.dto.js';
import { PaginationDto, PaginatedResultDto } from './common/dto/pagination.dto.js';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Global API prefix
  const apiPrefix = configService.get<string>('apiPrefix', 'api');
  app.setGlobalPrefix(apiPrefix);

  // Enable Cross-Origin Resource Sharing
  const corsOrigin = configService.get<string>('cors.origin', '*');
  app.enableCors({
    origin:
      corsOrigin === '*'
        ? true
        : corsOrigin.split(',').map((o) => o.trim()).filter(Boolean),
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });

  // Global Validation Pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: false,
    }),
  );

  // Global Interceptors & Exception Filter
  app.useGlobalInterceptors(
    new LoggingInterceptor(),
    new TransformInterceptor(),
  );
  app.useGlobalFilters(new HttpExceptionFilter());

  // Swagger OpenAPI Documentation
  const document = SwaggerModule.createDocument(app, buildSwaggerConfig(), {
    extraModels: [ApiResponseDto, ErrorResponseDto, PaginationDto, PaginatedResultDto],
  });
  SwaggerModule.setup('docs', app, document, {
    customSiteTitle: 'Car CRM API Docs',
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
      filter: true,
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
    },
  });

  const port = configService.get<number>('port', 3001);
  await app.listen(port);

  logger.log(`Car CRM API is running on: http://localhost:${port}/${apiPrefix}`);
  logger.log(`Interactive Swagger Docs: http://localhost:${port}/docs`);
}

await bootstrap();
