import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SalesService } from './sales.service.js';
import { CreateSaleDto } from './dto/create-sale.dto.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';

@ApiTags('Sales & Bookings')
@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get()
  @ApiOperation({ summary: 'List sales quotations, bookings, and contracts' })
  @ApiResponse({ status: 200, description: 'Paginated sales list' })
  async findAll(@Query() paginationDto: PaginationDto) {
    return this.salesService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get details of a booking or sales record' })
  async findOne(@Param('id') id: string) {
    return this.salesService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new booking, quotation, or sale' })
  @ApiResponse({ status: 201, description: 'Sale record created' })
  async create(@Body() createSaleDto: CreateSaleDto) {
    return this.salesService.create(createSaleDto);
  }
}
