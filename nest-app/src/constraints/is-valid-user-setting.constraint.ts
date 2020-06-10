import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
} from 'class-validator';
import { getManager } from 'typeorm';
import { RandomSettings } from '../user-settings/user-setting.dto';
import { UserEntity } from '../user/user.entity';
import { UnauthorizedException } from '@nestjs/common';

@ValidatorConstraint({ async: true })
export class IsValidUserSettingConstraint
    implements ValidatorConstraintInterface {
    async validate(randomSettings: RandomSettings, args: ValidationArguments) {
        const user = await getManager()
            .createQueryBuilder(UserEntity, 'user')
            .where(`user.id = :id`, {
                id: randomSettings.bestie,
            })
            .getOne();

        if (user) return true;
        // return false for 400 - otherwise throw desired exception
        throw new UnauthorizedException();
    }
}

export function IsValidUserSetting(validationOptions?: ValidationOptions): any {
    return function (object: RandomSettings, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsValidUserSettingConstraint,
        });
    };
}
