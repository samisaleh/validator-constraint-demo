import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    create(@Body() user: UserDto) {
        return this.usersService.save(user);
    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Delete(':id')
    delete(@Param('id') id) {
        return this.usersService.remove(id);
    }

    @Get(':id')
    findOne(@Param('id') id) {
        return this.usersService.findOne(id);
    }
}
