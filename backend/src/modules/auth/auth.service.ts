import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcryptjs';
import { LoginDto, RegisterDto } from './dto/login.dto.js';
import { Role } from '../../common/enums/role.enum.js';

interface UserRecord {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
}

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  private readonly users: UserRecord[] = [
    {
      id: 'usr_admin',
      name: 'System Admin',
      email: 'admin@carcrm.com',
      password: bcrypt.hashSync('Password123!', 10),
      role: Role.ADMIN,
    },
    {
      id: 'usr_soratha',
      name: 'Soun Soratha',
      email: 'soratha@carcrm.com',
      password: bcrypt.hashSync('Password123!', 10),
      role: Role.SALES_MANAGER,
    },
  ];

  async login(loginDto: LoginDto) {
    const user = this.users.find(
      (u) => u.email.toLowerCase() === loginDto.email.toLowerCase(),
    );

    if (!user || !bcrypt.compareSync(loginDto.password, user.password)) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = {
      sub: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    };
    const token = await this.jwtService.signAsync(payload);

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
      throw new ConflictException('User with this email already exists');
    }

    const newUser: UserRecord = {
      id: `usr_${Date.now()}`,
      name: registerDto.name,
      email: registerDto.email,
      password: bcrypt.hashSync(registerDto.password, 10),
      role: Role.SALES_EXECUTIVE,
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
    const user = this.users.find((u) => u.id === userId);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
  }
}
