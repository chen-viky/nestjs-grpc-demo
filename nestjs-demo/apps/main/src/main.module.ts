import { ClientsModule } from '@nestjs/microservices';
import { Module } from '@nestjs/common';
import { MainController } from './main.controller';
import { MainService } from './main.service';
import { grpcClientOptions } from './grpc.client.options';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        ...grpcClientOptions,
      },
    ]),
  ],
  controllers: [MainController],
  providers: [MainService],
})
export class MainModule {}
