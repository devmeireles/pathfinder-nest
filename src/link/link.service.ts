import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Link } from './entities/link.entity';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { LinkRepository } from './link.repository';

@Injectable()
export class LinkService {

  // constructor(
  //   @Inject('LINK_REPOSITORY')
  //   private repository: Repository<Link>,
  // ) {}

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
    return this.repository.update(+id, updateLinkDto);
  }

  remove(id: string) {
    return this.repository.delete(id);
  }
}
