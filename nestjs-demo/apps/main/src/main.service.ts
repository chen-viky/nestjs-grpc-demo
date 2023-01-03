import { ClientGrpc } from '@nestjs/microservices';
import { Get, Inject, Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class MainService implements OnModuleInit {
  private heroService: any;

  constructor(@Inject('HERO_PACKAGE') private client: ClientGrpc) {}

  getHello(): string {
    return 'Hello World!';
  }

  onModuleInit() {
    this.heroService = this.client.getService<any>('HeroService');
  }

  getHero(): any {
    return this.heroService.findOne({ id: 1 });
  }
}
