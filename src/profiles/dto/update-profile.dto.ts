import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileDto } from './create-profile.dto';
import { IsString, Length } from 'class-validator';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
  id: string;

  @IsString()
  @Length(3, 100)
  name: string;

  @IsString()
  @Length(3, 200)
  description: string;
}
