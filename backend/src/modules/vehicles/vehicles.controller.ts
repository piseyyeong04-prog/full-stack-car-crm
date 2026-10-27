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
import { VehiclesService } from './vehicles.service.js';
import { CreateVehicleDto, UpdateVehicleDto } from './dto/create-vehicle.dto.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';
import { Roles } from '../../common/decorators/roles.decorator.js';
import { Role } from '../../common/enums/role.enum.js';

import { ApiStandardErrors } from '../../common/decorators/api-standard-errors.decorator.js';

@ApiTags('Vehicles')
@ApiBearerAuth()
@ApiStandardErrors()
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get()
  @ApiOperation({ summary: 'List vehicle stock and inventory' })
  @ApiResponse({ status: 200, description: 'Paginated list of vehicles' })
  async findAll(@Query() paginationDto: PaginationDto) {
    return this.vehiclesService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'Resource identifier', example: 'lead_1' })
  @ApiOperation({ summary: 'Get vehicle details by ID or VIN' })
  async findOne(@Param('id') id: string) {
    return this.vehiclesService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Add a new vehicle to stock' })
  @ApiResponse({ status: 201, description: 'Vehicle created' })
  async create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehiclesService.create(createVehicleDto);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', description: 'Resource identifier', example: 'lead_1' })
  @ApiOperation({ summary: 'Update vehicle information or inventory status' })
  async update(
    @Param('id') id: string,
    @Body() updateVehicleDto: UpdateVehicleDto,
  ) {
    return this.vehiclesService.update(id, updateVehicleDto);
  }

  @Roles(Role.ADMIN, Role.SALES_MANAGER)
  @Delete(':id')
  @ApiParam({ name: 'id', description: 'Resource identifier', example: 'lead_1' })
  @ApiOperation({ summary: 'Remove a vehicle from inventory' })
  async remove(@Param('id') id: string) {
    return this.vehiclesService.remove(id);
  }
}
