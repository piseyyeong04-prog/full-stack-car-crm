import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponseDto {
  @ApiProperty({ example: false })
  success: boolean;

  @ApiProperty({ example: 400 })
  statusCode: number;

  @ApiProperty({ example: 'Validation failed', description: 'Human readable error message' })
  message: string | string[];

  @ApiProperty({ example: 'Bad Request', required: false })
  error?: string;

  @ApiProperty({ example: '/api/leads' })
  path: string;

  @ApiProperty({ example: '2026-10-27T14:00:00.000Z' })
  timestamp: string;
}
