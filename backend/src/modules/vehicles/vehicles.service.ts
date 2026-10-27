import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVehicleDto, UpdateVehicleDto, VehicleStatus } from './dto/create-vehicle.dto.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';

export interface VehicleRecord {
  id: string;
  make: string;
  model: string;
  year: number;
  vin: string;
  color: string;
  price: number;
  cost?: number;
  status: VehicleStatus;
  location?: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class VehiclesService {
  private vehicles: VehicleRecord[] = [
    {
      id: 'veh_1',
      make: 'Toyota',
      model: 'Land Cruiser 300 VXR',
      year: 2024,
      vin: 'JTMCY7AJ8P4019283',
      color: 'Pearl White',
      price: 135000,
      cost: 118000,
      status: VehicleStatus.IN_STOCK,
      location: 'Main Showroom Bay 01',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'veh_2',
      make: 'Lexus',
      model: 'LX600 VIP 4-Seater',
      year: 2024,
      vin: 'JTJHY7AX8P2098412',
      color: 'Sonic Titanium',
      price: 235000,
      cost: 205000,
      status: VehicleStatus.RESERVED,
      location: 'VIP Display Lounge',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'veh_3',
      make: 'Ford',
      model: 'Ranger Raptor 3.0L V6',
      year: 2024,
      vin: 'MNBXX458902194821',
      color: 'Code Orange',
      price: 79000,
      cost: 69000,
      status: VehicleStatus.IN_STOCK,
      location: 'Exterior Lot B',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  async findAll(paginationDto: PaginationDto) {
    const { page = 1, limit = 10, search } = paginationDto;
    let filtered = [...this.vehicles];

    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (v) =>
          v.make.toLowerCase().includes(q) ||
          v.model.toLowerCase().includes(q) ||
          v.vin.toLowerCase().includes(q) ||
          v.color.toLowerCase().includes(q),
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
    const vehicle = this.vehicles.find((v) => v.id === id || v.vin === id);
    if (!vehicle) {
      throw new NotFoundException(`Vehicle #${id} not found`);
    }
    return vehicle;
  }

  async create(createVehicleDto: CreateVehicleDto) {
    const newVehicle = {
      id: `veh_${Date.now()}`,
      ...createVehicleDto,
      status: createVehicleDto.status || VehicleStatus.IN_STOCK,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.vehicles.unshift(newVehicle);
    return newVehicle;
  }

  async update(id: string, updateVehicleDto: UpdateVehicleDto) {
    const vehicleIndex = this.vehicles.findIndex((v) => v.id === id);
    if (vehicleIndex === -1) {
      throw new NotFoundException(`Vehicle #${id} not found`);
    }

    const updated = {
      ...this.vehicles[vehicleIndex],
      ...updateVehicleDto,
      updatedAt: new Date().toISOString(),
    };
    this.vehicles[vehicleIndex] = updated;
    return updated;
  }

  async remove(id: string) {
    const vehicleIndex = this.vehicles.findIndex((v) => v.id === id);
    if (vehicleIndex === -1) {
      throw new NotFoundException(`Vehicle #${id} not found`);
    }
    const [deleted] = this.vehicles.splice(vehicleIndex, 1);
    return { deleted: true, vehicle: deleted };
  }
}
