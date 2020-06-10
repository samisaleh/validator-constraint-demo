import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/user.entity';
import { UsersModule } from './user/users.module';
import { UserSettingEntity } from './user-settings/user-setting.entity';
import { UserSettingsModule } from './user-settings/user-settings.module';
import { ConstraintModule } from './constraints/constraint.module';

@Module({
    imports: [
        ConstraintModule,
        UsersModule,
        UserSettingsModule,
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: '127.0.0.1',
            port: 5432,
            username: 'some_user',
            password: 'some_password',
            database: 'some_db',
            entities: [UserEntity, UserSettingEntity],
            synchronize: true,
        }),
    ],
})
export class AppModule {}
