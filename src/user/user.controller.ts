import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {
  @Get()
  async getAllUsers() {
    return JSON.stringify({ test: 'a,b,c' });
  }

  @Post()
  async createUser(@Body() createUser: CreateUserDto) {
    // Implementar a criação do usuário
    return {
      ...createUser,
      password: undefined,
    };
  }
}
