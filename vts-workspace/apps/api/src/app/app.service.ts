import { Injectable } from '@nestjs/common';
import { Message } from '@vts-workspace/api-interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import { ClassRepository } from './class.repository';
import { ClassDto } from './dto/class.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ClassRepository)
    private classRepository: ClassRepository
  ) {}

  getData(): Message {
    return { message: 'Welcome to Visa Demo!' };
  }

  async getDatas(): Promise<Message[]> {
    const mess = [
      { message: 'Welcome to Visa Demo!' },
      { message: 'Second record!' },
      { message: 'Third record' }
    ];

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(mess);
      }, 5000);
    });
  }

  getClasses(): Promise<ClassDto[]> {
    return this.classRepository.getClasses();
  }
}
