import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ReportsService } from './reports.service.js';

@ApiTags('Reports & Analytics')
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('dashboard')
  @ApiOperation({ summary: 'Get CRM dashboard KPIs and activity summary' })
  @ApiResponse({ status: 200, description: 'Dashboard metrics and KPIs' })
  async getDashboardSummary() {
    return this.reportsService.getDashboardSummary();
  }

  @Get('sales')
  @ApiOperation({ summary: 'Get monthly sales and salesperson performance report' })
  async getSalesReport() {
    return this.reportsService.getSalesReport();
  }
}
