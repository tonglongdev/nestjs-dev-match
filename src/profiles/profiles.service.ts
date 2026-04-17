import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'Brianna Watts',
      description:
        "Looking for someone to merge with my heart. I'm a full-stack romantic who refactors my feelings until they pass all tests. Bonus points if you can debug my issues while we pair program over coffee. Let's commit to something beautiful together.",
    },
    {
      id: randomUUID(),
      name: 'Jasper Quinn',
      description:
        'Seeking a partner in crime to compile my heart. Must be comfortable with the terminal because I only speak fluent bash. Swipe right if you can appreciate a good kernel panic every now and then.',
    },
    {
      id: randomUUID(),
      name: 'Leo Park',
      description:
        "You think you know VIM? Try Neovim. I'll make your modal dreams come true. Want to escape the matrix and explore the perfect keyboard shortcut for love?",
    },
  ];

  create(createProfileDto: CreateProfileDto) {
    return this.profiles.push({
      id: randomUUID(),
      name: createProfileDto.name,
      description: createProfileDto.description,
    });
  }

  findAll() {
    return this.profiles;
  }

  findOne(id: string) {
    const matchingProfile = this.profiles.find((profile) => profile.id === id);
    if (!matchingProfile) {
      throw new NotFoundException(`Profile with id ${id} not found`);
    }
    return matchingProfile;
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    const profileIndex = this.profiles.findIndex(
      (profile) => profile.id === id,
    );
    if (profileIndex === -1) {
      throw new NotFoundException(`Profile with id ${id} not found`);
    }
    this.profiles[profileIndex] = {
      ...this.profiles[profileIndex],
      ...updateProfileDto,
      id: this.profiles[profileIndex].id,
    };
    return this.profiles[profileIndex];
  }

  remove(id: string) {
    const profileIndex = this.profiles.findIndex(
      (profile) => profile.id === id,
    );
    if (profileIndex === -1) {
      throw new NotFoundException(`Profile with id ${id} not found`);
    }
    return this.profiles.splice(profileIndex, 1);
  }
}
