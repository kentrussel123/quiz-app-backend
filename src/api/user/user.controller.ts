import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UpdateUserDto } from './dto/updateUserDto';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

    @Post('/login')
    async LoginUser (@Body() req:any, @Res()res:Response){
        const user = await this.userService.getUserByEmail(req.email)
        if(req.password !== user.password){
            return res.status(400).json({message: 'Your email and password does not match! Please try again'})
        }
        return res.status(200).json({message: 'successfully logged in', user})
    }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto, @Res() res:Response) {
    const user = await this.userService.createUser(createUserDto);
    console.log()
    return res.status(200).json({ message: 'User created successfully', user });
  }

  @Get()
  async getAllUsers() {
    const users = await this.userService.getAllUsers();
    return { users };
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const user = await this.userService.getUserById(id);
    return { user };
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.userService.updateUser(id, updateUserDto);
    return { message: 'User updated successfully', user };
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    await this.userService.deleteUser(id);
    return { message: 'User deleted successfully' };
  }
}
