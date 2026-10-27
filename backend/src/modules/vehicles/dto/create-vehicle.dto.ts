import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export enum VehicleStatus {
  IN_STOCK = 'IN_STOCK',
  RESERVED = 'RESERVED',
  SOLD = 'SOLD',
  IN_TRANSIT = 'IN_TRANSIT',
  MAINTENANCE = 'MAINTENANCE',
}

export class CreateVehicleDto {
  @ApiProperty({ example: 'Toyota', description: 'Brand or manufacturer' })
  @IsString()
  @IsNotEmpty()
  make: string;

  @ApiProperty({ example: 'Land Cruiser 300 VXR', description: 'Model name' })
  @IsString()
  @IsNotEmpty()
  model: string;

  @ApiProperty({ example: 2024, description: 'Manufacturing year' })
  @IsNumber()
  year: number;

  @ApiProperty({ example: 'JTMCY7AJ8P4019283', description: 'Vehicle Identification Number (VIN)' })
  @IsString()
  @IsNotEmpty()
  vin: string;

  @ApiProperty({ example: 'Pearl White', description: 'Exterior color' })
  @IsString()
  @IsNotEmpty()
  color: string;

  @ApiProperty({ example: 125000, description: 'Selling price in USD' })
  @IsNumber()
  price: number;

  @ApiPropertyOptional({ example: 108000, description: 'Acquisition / purchase cost' })
  @IsOptional()
  @IsNumber()
  cost?: number;

  @ApiPropertyOptional({ enum: VehicleStatus, default: VehicleStatus.IN_STOCK })
  @IsOptional()
  status?: VehicleStatus = VehicleStatus.IN_STOCK;

  @ApiPropertyOptional({ example: 'Showroom Floor A1', description: 'Location / showroom parking bay' })
  @IsOptional()
  @IsString()
  location?: string;
}

export class UpdateVehicleDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  make?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  model?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  year?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  color?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  price?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  cost?: number;

  @ApiPropertyOptional({ enum: VehicleStatus })
  @IsOptional()
  status?: VehicleStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  location?: string;
}
