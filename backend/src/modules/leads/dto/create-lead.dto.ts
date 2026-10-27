import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export enum LeadStage {
  NEW = 'NEW',
  CONTACTED = 'CONTACTED',
  TEST_DRIVE = 'TEST_DRIVE',
  QUOTATION_SENT = 'QUOTATION_SENT',
  NEGOTIATION = 'NEGOTIATION',
  WON = 'WON',
  LOST = 'LOST',
}

export class CreateLeadDto {
  @ApiProperty({ example: 'Chan Vathanaka', description: 'Prospective customer name' })
  @IsString()
  @IsNotEmpty()
  customerName: string;

  @ApiProperty({ example: '+855 12 345 678', description: 'Contact phone number' })
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @ApiPropertyOptional({ example: 'vathanaka@example.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ example: 'Toyota Land Cruiser 300', description: 'Interested vehicle or model' })
  @IsString()
  @IsNotEmpty()
  interestedVehicle: string;

  @ApiPropertyOptional({ example: 125000, description: 'Customer estimated budget' })
  @IsOptional()
  @IsNumber()
  budget?: number;

  @ApiProperty({ example: 'Facebook Ad', description: 'Lead generation source' })
  @IsString()
  @IsNotEmpty()
  source: string;

  @ApiPropertyOptional({ enum: LeadStage, default: LeadStage.NEW })
  @IsOptional()
  stage?: LeadStage = LeadStage.NEW;

  @ApiPropertyOptional({ example: 'Soun Soratha', description: 'Assigned salesperson' })
  @IsOptional()
  @IsString()
  assignedSalesperson?: string;

  @ApiPropertyOptional({ example: 'Prefers pearl white color with black interior' })
  @IsOptional()
  @IsString()
  notes?: string;
}

export class UpdateLeadDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  customerName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  interestedVehicle?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  budget?: number;

  @ApiPropertyOptional({ enum: LeadStage })
  @IsOptional()
  stage?: LeadStage;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  assignedSalesperson?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}
