import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLeadDto, LeadStage, UpdateLeadDto } from './dto/create-lead.dto.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';

export interface LeadRecord {
  id: string;
  customerName: string;
  phoneNumber: string;
  email?: string;
  interestedVehicle: string;
  budget?: number;
  source: string;
  stage: LeadStage;
  assignedSalesperson?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class LeadsService {
  private leads: LeadRecord[] = [
    {
      id: 'lead_1',
      customerName: 'Keo Sokha',
      phoneNumber: '+855 12 889 900',
      email: 'sokha.keo@gmail.com',
      interestedVehicle: 'Lexus LX600 2024',
      budget: 220000,
      source: 'Telegram Inquiry',
      stage: LeadStage.TEST_DRIVE,
      assignedSalesperson: 'Soun Soratha',
      notes: 'Scheduled VIP test drive this Saturday morning.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'lead_2',
      customerName: 'Ly Vannak',
      phoneNumber: '+855 77 123 456',
      email: 'vannak.ly@outlook.com',
      interestedVehicle: 'Ford Ranger Raptor 2024',
      budget: 78000,
      source: 'Showroom Walk-in',
      stage: LeadStage.QUOTATION_SENT,
      assignedSalesperson: 'Chhay Meng',
      notes: 'Requested loan calculation with 30% down payment.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  async findAll(paginationDto: PaginationDto) {
    const { page = 1, limit = 10, search } = paginationDto;
    let filtered = [...this.leads];

    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (l) =>
          l.customerName.toLowerCase().includes(q) ||
          l.phoneNumber.includes(q) ||
          l.interestedVehicle.toLowerCase().includes(q),
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
    const lead = this.leads.find((l) => l.id === id);
    if (!lead) {
      throw new NotFoundException(`Lead #${id} not found`);
    }
    return lead;
  }

  async create(createLeadDto: CreateLeadDto) {
    const newLead = {
      id: `lead_${Date.now()}`,
      ...createLeadDto,
      stage: createLeadDto.stage || LeadStage.NEW,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.leads.unshift(newLead);
    return newLead;
  }

  async update(id: string, updateLeadDto: UpdateLeadDto) {
    const leadIndex = this.leads.findIndex((l) => l.id === id);
    if (leadIndex === -1) {
      throw new NotFoundException(`Lead #${id} not found`);
    }

    const updated = {
      ...this.leads[leadIndex],
      ...updateLeadDto,
      updatedAt: new Date().toISOString(),
    };
    this.leads[leadIndex] = updated;
    return updated;
  }

  async remove(id: string) {
    const leadIndex = this.leads.findIndex((l) => l.id === id);
    if (leadIndex === -1) {
      throw new NotFoundException(`Lead #${id} not found`);
    }
    const [deleted] = this.leads.splice(leadIndex, 1);
    return { deleted: true, lead: deleted };
  }
}
