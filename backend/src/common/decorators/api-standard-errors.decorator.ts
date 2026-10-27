import { applyDecorators } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ErrorResponseDto } from '../dto/error-response.dto.js';

export function ApiStandardErrors() {
  return applyDecorators(
    ApiResponse({ status: 400, description: 'Validation failed', type: ErrorResponseDto }),
    ApiResponse({ status: 401, description: 'Missing or invalid bearer token', type: ErrorResponseDto }),
    ApiResponse({ status: 403, description: 'Insufficient role permissions', type: ErrorResponseDto }),
  );
}
