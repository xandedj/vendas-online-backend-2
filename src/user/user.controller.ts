import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './interfaces/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<UserEntity[]> {
    return this.userService.getAllUsers();
  }

  //   @Post()
  //   async createUser(@Body() createUser: CreateUserDto) {
  //     // Implementar a criação do usuário
  //     return {
  //       ...createUser,
  //       password: undefined,
  //     };
  //   }
  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity> {
    // Implementar a criação do usuário
    return this.userService.createUser(createUser);
  }
}
