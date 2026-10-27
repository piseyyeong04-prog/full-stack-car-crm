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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { VehiclesService } from './vehicles.service.js';
import { CreateVehicleDto, UpdateVehicleDto } from './dto/create-vehicle.dto.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';

@ApiTags('Vehicles')
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
  @ApiOperation({ summary: 'Update vehicle information or inventory status' })
  async update(
    @Param('id') id: string,
    @Body() updateVehicleDto: UpdateVehicleDto,
  ) {
    return this.vehiclesService.update(id, updateVehicleDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a vehicle from inventory' })
  async remove(@Param('id') id: string) {
    return this.vehiclesService.remove(id);
  }
}
