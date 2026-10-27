import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { CustomersService } from './customers.service.js';
import { CreateCustomerDto, UpdateCustomerDto } from './dto/create-customer.dto.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';
import { Roles } from '../../common/decorators/roles.decorator.js';
import { Role } from '../../common/enums/role.enum.js';

import { ApiStandardErrors } from '../../common/decorators/api-standard-errors.decorator.js';

@ApiTags('Customers')
@ApiBearerAuth()
@ApiStandardErrors()
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  @ApiOperation({ summary: 'List customer profiles' })
  @ApiResponse({ status: 200, description: 'Paginated customer list' })
  async findAll(@Query() paginationDto: PaginationDto) {
    return this.customersService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'Resource identifier', example: 'lead_1' })
  @ApiOperation({ summary: 'Get customer profile details' })
  async findOne(@Param('id') id: string) {
    return this.customersService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new customer profile' })
  @ApiResponse({ status: 201, description: 'Customer created' })
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', description: 'Resource identifier', example: 'lead_1' })
  @ApiOperation({ summary: 'Update customer profile' })
  async update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customersService.update(id, updateCustomerDto);
  }

  @Roles(Role.ADMIN, Role.SALES_MANAGER)
  @Delete(':id')
  @ApiParam({ name: 'id', description: 'Resource identifier', example: 'lead_1' })
  @ApiOperation({ summary: 'Delete a customer' })
  async remove(@Param('id') id: string) {
    return this.customersService.remove(id);
  }
}
