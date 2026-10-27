import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from './dto/create-customer.dto.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';

export interface CustomerRecord {
  id: string;
  name: string;
  phone: string;
  email?: string;
  address?: string;
  customerType?: string;
  purchasedVehiclesCount: number;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class CustomersService {
  private customers: CustomerRecord[] = [
    {
      id: 'cust_1',
      name: 'Oknha Bun Narith',
      phone: '+855 12 998 877',
      email: 'bun.narith@company.com.kh',
      address: '#123 Norodom Blvd, Phnom Penh',
      customerType: 'VIP Corporate Client',
      purchasedVehiclesCount: 3,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'cust_2',
      name: 'Dr. Chea Sovann',
      phone: '+855 11 554 433',
      email: 'sovann.chea@gmail.com',
      address: '#45 Russian Hospital St, Phnom Penh',
      customerType: 'Individual VIP',
      purchasedVehiclesCount: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  async findAll(paginationDto: PaginationDto) {
    const { page = 1, limit = 10, search } = paginationDto;
    let filtered = [...this.customers];

    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.phone.includes(q) ||
          (c.email && c.email.toLowerCase().includes(q)),
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
    const customer = this.customers.find((c) => c.id === id);
    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return customer;
  }

  async create(createCustomerDto: CreateCustomerDto) {
    const newCustomer = {
      id: `cust_${Date.now()}`,
      ...createCustomerDto,
      purchasedVehiclesCount: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.customers.unshift(newCustomer);
    return newCustomer;
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    const index = this.customers.findIndex((c) => c.id === id);
    if (index === -1) {
      throw new NotFoundException(`Customer #${id} not found`);
    }

    const updated = {
      ...this.customers[index],
      ...updateCustomerDto,
      updatedAt: new Date().toISOString(),
    };
    this.customers[index] = updated;
    return updated;
  }

  async remove(id: string) {
    const index = this.customers.findIndex((c) => c.id === id);
    if (index === -1) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    const [deleted] = this.customers.splice(index, 1);
    return { deleted: true, customer: deleted };
  }
}
