import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSaleDto, SaleStatus, SaleType } from './dto/create-sale.dto.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';

export interface SaleRecord {
  id: string;
  referenceNumber: string;
  type: SaleType;
  customerId: string;
  customerName: string;
  vehicleId: string;
  vehicleName: string;
  agreedPrice: number;
  depositAmount?: number;
  status: SaleStatus;
  salesperson?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class SalesService {
  private sales: SaleRecord[] = [
    {
      id: 'sale_101',
      referenceNumber: 'BK-2026-001',
      type: SaleType.BOOKING,
      customerId: 'cust_1',
      customerName: 'Oknha Bun Narith',
      vehicleId: 'veh_2',
      vehicleName: 'Lexus LX600 VIP 4-Seater',
      agreedPrice: 235000,
      depositAmount: 20000,
      status: SaleStatus.APPROVED,
      salesperson: 'Soun Soratha',
      notes: 'Paid deposit via ABA Bank transfer.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  async findAll(paginationDto: PaginationDto) {
    const { page = 1, limit = 10, search } = paginationDto;
    let filtered = [...this.sales];

    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (s) =>
          s.referenceNumber.toLowerCase().includes(q) ||
          s.customerName.toLowerCase().includes(q) ||
          s.vehicleName.toLowerCase().includes(q),
      );
    }

    const total = filtered.length;
    const startIndex = (page - 1) * limit;
    const items = filtered.slice(startIndex, startIndex + limit);

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasNextPage: page * limit < total,
      hasPrevPage: page > 1,
    };
  }

  async findOne(id: string) {
    const sale = this.sales.find((s) => s.id === id || s.referenceNumber === id);
    if (!sale) {
      throw new NotFoundException(`Sale record #${id} not found`);
    }
    return sale;
  }

  async create(createSaleDto: CreateSaleDto) {
    const newSale = {
      id: `sale_${Date.now()}`,
      referenceNumber: `SL-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      ...createSaleDto,
      customerName: 'Customer',
      vehicleName: 'Vehicle',
      status: SaleStatus.PENDING_APPROVAL,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.sales.unshift(newSale);
    return newSale;
  }
}
