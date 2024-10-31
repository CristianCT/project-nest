import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(dayli: string): string {
    console.log(dayli);
    return 'Sapo';
  }
}
