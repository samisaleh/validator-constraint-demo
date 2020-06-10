import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { RandomSettings } from './user-setting.dto';
import { IsValidUserSetting } from '../constraints/is-valid-user-setting.constraint';

@Entity('user_settings')
export class UserSettingEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne((type) => UserEntity)
    user: UserEntity;

    @Column({ type: 'jsonb' })
    @IsValidUserSetting()
    random: RandomSettings;
}
