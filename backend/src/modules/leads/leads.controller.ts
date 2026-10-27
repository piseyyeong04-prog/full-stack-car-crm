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
import { LeadsService } from './leads.service.js';
import { CreateLeadDto, UpdateLeadDto } from './dto/create-lead.dto.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';
import { Roles } from '../../common/decorators/roles.decorator.js';
import { Role } from '../../common/enums/role.enum.js';

import { ApiStandardErrors } from '../../common/decorators/api-standard-errors.decorator.js';

@ApiTags('Leads')
@ApiBearerAuth()
@ApiStandardErrors()
@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Get()
  @ApiOperation({ summary: 'List CRM leads with pagination and search' })
  @ApiResponse({ status: 200, description: 'Paginated list of leads' })
  async findAll(@Query() paginationDto: PaginationDto) {
    return this.leadsService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'Resource identifier', example: 'lead_1' })
  @ApiOperation({ summary: 'Get details of a specific lead' })
  async findOne(@Param('id') id: string) {
    return this.leadsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new CRM lead' })
  @ApiResponse({ status: 201, description: 'Lead successfully created' })
  async create(@Body() createLeadDto: CreateLeadDto) {
    return this.leadsService.create(createLeadDto);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', description: 'Resource identifier', example: 'lead_1' })
  @ApiOperation({ summary: 'Update lead information or pipeline stage' })
  async update(
    @Param('id') id: string,
    @Body() updateLeadDto: UpdateLeadDto,
  ) {
    return this.leadsService.update(id, updateLeadDto);
  }

  @Roles(Role.ADMIN, Role.SALES_MANAGER)
  @Delete(':id')
  @ApiParam({ name: 'id', description: 'Resource identifier', example: 'lead_1' })
  @ApiOperation({ summary: 'Delete a lead' })
  async remove(@Param('id') id: string) {
    return this.leadsService.remove(id);
  }
}
