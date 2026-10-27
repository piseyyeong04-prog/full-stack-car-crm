import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportsService {
  async getDashboardSummary() {
    return {
      kpis: {
        totalRevenue: 840000,
        monthlySalesTarget: 1000000,
        targetAchievementPercentage: 84,
        totalLeads: 48,
        activeBookings: 12,
        vehiclesInStock: 24,
        vehiclesSoldThisMonth: 8,
      },
      leadConversionRate: 26.5,
      recentActivities: [
        {
          id: 'act_1',
          type: 'BOOKING_CREATED',
          description: 'Lexus LX600 booked by Oknha Bun Narith',
          timestamp: new Date().toISOString(),
        },
        {
          id: 'act_2',
          type: 'LEAD_WON',
          description: 'Toyota Land Cruiser 300 deal finalized',
          timestamp: new Date(Date.now() - 3600000).toISOString(),
        },
      ],
    };
  }

  async getSalesReport() {
    return {
      monthlyBreakdown: [
        { month: 'Jan', revenue: 420000, units: 4 },
        { month: 'Feb', revenue: 580000, units: 6 },
        { month: 'Mar', revenue: 840000, units: 8 },
      ],
      topSalespersons: [
        { name: 'Soun Soratha', unitsSold: 5, revenue: 520000, commission: 5200 },
        { name: 'Chhay Meng', unitsSold: 3, revenue: 320000, commission: 3200 },
      ],
    };
  }
}
