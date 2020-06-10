import { UserEntity } from '../user/user.entity';
import { IsValidUserSetting } from 'src/constraints/is-valid-user-setting.constraint';

export class RandomSettings {
    favoriteFood: string;
    bestie: number;
}

export class UserSettingDto {
    id: number;

    user: UserEntity;

    @IsValidUserSetting()
    random: RandomSettings;
}
