import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHolanuevo(): string {
    return 'nuevo hola mundo';
  }
}
