import { EntityRepository, Repository } from 'typeorm';


import { ClassDto } from './dto/class.dto';
import { Class } from './class.entity';


@EntityRepository(Class)
export class ClassRepository extends Repository<Class> {
  async getClasses(): Promise<ClassDto[]> {
    const query = this.createQueryBuilder('class');
    const users = await query.getMany();

    return users;
  }
}
