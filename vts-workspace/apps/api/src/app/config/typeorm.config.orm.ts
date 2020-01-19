import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';
import { Class } from '../class.entity';



const dbConfig: any = config.has('db')
  ? config.get('db')
  : console.error('db not defined in env or in config');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.BD_DB_HOST || dbConfig.host,
  port:  process.env.BD_DB_PORT  || dbConfig.port,
  username: process.env.BD_DB_USERNAME || dbConfig.username,
  password: process.env.BD_DB_PASSWORD || dbConfig.password,
  database: process.env.BD_DB_NAME || dbConfig.database,
  entities: [Class],
  synchronize: process.env.BD_DB_SYNC || dbConfig.synchronize
};
