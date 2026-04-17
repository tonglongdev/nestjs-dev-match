import { IsString, Length } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @Length(3, 100)
  name: string;

  @IsString()
  @Length(3, 200)
  description: string;
}
