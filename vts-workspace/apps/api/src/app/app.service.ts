import { Injectable } from '@nestjs/common';
import { Message } from '@vts-workspace/api-interfaces';

@Injectable()
export class AppService {
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
}
