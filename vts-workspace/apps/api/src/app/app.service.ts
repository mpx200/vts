import { Injectable } from '@nestjs/common';
import { Message } from '@vts-workspace/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to Visa Demo!' };
  }
}
