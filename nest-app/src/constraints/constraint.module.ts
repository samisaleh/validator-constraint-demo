import { IsValidUserSettingConstraint} from './is-valid-user-setting.constraint';
import { Module } from '@nestjs/common';

@Module({
    providers: [IsValidUserSettingConstraint],
})
export class ConstraintModule {}
