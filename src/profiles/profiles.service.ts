import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  create(createProfileDto: CreateProfileDto) {
    return `This action adds a new profile name: ${createProfileDto.name}, description: ${createProfileDto.description}`;
  }

  findAll({ age }: { age?: number }) {
    return `This action returns all profiles ${age ? `with age ${age}` : ''}`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profile`;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile with name: ${updateProfileDto.name}, description: ${updateProfileDto.description}`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
