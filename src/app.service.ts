import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Das ist das Backend von "das schlaue Auge"';
  }
}
