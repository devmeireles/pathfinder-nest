import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Link } from './entities/link.entity';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';

@Injectable()
export class LinkService {
  constructor(
    @InjectRepository(Link) private repository: Repository<Link>,
  ) {}

  create(createLinkDto: CreateLinkDto) {
    return this.repository.save(createLinkDto);
  }

  findAll(): Promise<Link[]> {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({
      id: id,
      isActive: true,
    });
  }

  update(id: string, updateLinkDto: UpdateLinkDto) {
    this.repository.update(id, updateLinkDto);
  }

  remove(id: string) {
    this.repository.delete(id);
  }
}
