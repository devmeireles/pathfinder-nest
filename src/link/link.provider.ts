import { DataSource } from 'typeorm';
import { Link } from './entities/link.entity';

export const linkProviders = [
  {
    provide: 'LINK_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Link),
    inject: ['DATA_SOURCE'],
  },
];