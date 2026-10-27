import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto/login.dto.js';

@Injectable()
export class AuthService {
  // In-memory mock for initial structure before ORM integration
  private readonly users = [
    {
      id: 'usr_admin',
      name: 'System Admin',
      email: 'admin@carcrm.com',
      password: 'Password123!',
      role: 'ADMIN',
    },
    {
      id: 'usr_soratha',
      name: 'Soun Soratha',
      email: 'soratha@carcrm.com',
      password: 'Password123!',
      role: 'SALES_MANAGER',
    },
  ];

  async login(loginDto: LoginDto) {
    const user = this.users.find(
      (u) => u.email.toLowerCase() === loginDto.email.toLowerCase(),
    );

    if (!user || user.password !== loginDto.password) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // In full implementation, sign JWT with JwtService
    const token = `fake-jwt-token-for-${user.id}`;

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  }

  async register(registerDto: RegisterDto) {
    const exists = this.users.some(
      (u) => u.email.toLowerCase() === registerDto.email.toLowerCase(),
    );

    if (exists) {
      throw new UnauthorizedException('User with this email already exists');
    }

    const newUser = {
      id: `usr_${Date.now()}`,
      name: registerDto.name,
      email: registerDto.email,
      password: registerDto.password,
      role: registerDto.role || 'SALES_EXECUTIVE',
    };

    this.users.push(newUser);

    return {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    };
  }

  async getProfile(userId: string) {
    const user = this.users.find((u) => u.id === userId) || this.users[0];
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
  }
}
