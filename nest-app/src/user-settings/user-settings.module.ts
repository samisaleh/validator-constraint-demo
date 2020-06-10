import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSettingsService } from './user-settings.service';
import { UserSettingsController } from './user-settings.controller';
import { UserSettingEntity } from './user-setting.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UserSettingEntity])],
    providers: [UserSettingsService],
    controllers: [UserSettingsController],
})
export class UserSettingsModule {}
