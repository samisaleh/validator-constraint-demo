import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserSettingEntity } from './user-setting.entity';
import { UserSettingDto } from './user-setting.dto';

@Injectable()
export class UserSettingsService {
    constructor(
        @InjectRepository(UserSettingEntity)
        private usersRepository: Repository<UserSettingEntity>
    ) {}

    findAll(): Promise<UserSettingEntity[]> {
        return this.usersRepository.find();
    }

    findOne(id: string): Promise<UserSettingEntity> {
        return this.usersRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }

    save(userSettingDto: UserSettingDto): Promise<UserSettingEntity> {
        return this.usersRepository.save(userSettingDto);
    }
}
