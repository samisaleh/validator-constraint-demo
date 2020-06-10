import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserSettingsService } from './user-settings.service';
import { UserSettingDto } from './user-setting.dto';

@Controller('user-settings')
export class UserSettingsController {
    constructor(private usersService: UserSettingsService) {}

    @Post()
    create(@Body() userSettingDto: UserSettingDto) {
        return this.usersService.save(userSettingDto);
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
