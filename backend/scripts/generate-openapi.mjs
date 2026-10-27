import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { mkdirSync, writeFileSync } from 'node:fs';
import { AppModule } from '../dist/app.module.js';
import { buildSwaggerConfig } from '../dist/config/swagger.config.js';
import { ApiResponseDto } from '../dist/common/dto/api-response.dto.js';
import { ErrorResponseDto } from '../dist/common/dto/error-response.dto.js';
import { PaginationDto, PaginatedResultDto } from '../dist/common/dto/pagination.dto.js';

const app = await NestFactory.create(AppModule, { logger: false });
app.setGlobalPrefix('api');

const document = SwaggerModule.createDocument(app, buildSwaggerConfig(), {
  extraModels: [ApiResponseDto, ErrorResponseDto, PaginationDto, PaginatedResultDto],
});

mkdirSync('docs', { recursive: true });
writeFileSync('docs/openapi.json', JSON.stringify(document, null, 2));

await app.close();

const pathCount = Object.keys(document.paths ?? {}).length;
console.log(`OpenAPI spec written to docs/openapi.json (${pathCount} paths)`);
