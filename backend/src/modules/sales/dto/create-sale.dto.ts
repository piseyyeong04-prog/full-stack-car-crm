import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export enum SaleType {
  BOOKING = 'BOOKING',
  QUOTATION = 'QUOTATION',
  CONTRACT = 'CONTRACT',
}

export enum SaleStatus {
  DRAFT = 'DRAFT',
  PENDING_APPROVAL = 'PENDING_APPROVAL',
  APPROVED = 'APPROVED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export class CreateSaleDto {
  @ApiProperty({ enum: SaleType, example: SaleType.BOOKING })
  @IsNotEmpty()
  type: SaleType;

  @ApiProperty({ example: 'cust_1', description: 'Customer ID' })
  @IsString()
  @IsNotEmpty()
  customerId: string;

  @ApiProperty({ example: 'veh_1', description: 'Vehicle ID' })
  @IsString()
  @IsNotEmpty()
  vehicleId: string;

  @ApiProperty({ example: 135000, description: 'Agreed sale price' })
  @IsNumber()
  agreedPrice: number;

  @ApiPropertyOptional({ example: 5000, description: 'Deposit / booking fee' })
  @IsOptional()
  @IsNumber()
  depositAmount?: number;

  @ApiPropertyOptional({ example: 'Soun Soratha', description: 'Responsible salesperson' })
  @IsOptional()
  @IsString()
  salesperson?: string;

  @ApiPropertyOptional({ example: 'Delivery scheduled for next Monday with full tank and ceramic coating' })
  @IsOptional()
  @IsString()
  notes?: string;
}
