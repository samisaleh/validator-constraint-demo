import {IsBoolean, IsString} from 'class-validator';

export class UserDto {
    id: number;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsBoolean()
    isActive: boolean;
}
