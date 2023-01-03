import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';
import { grpcClientOptions } from './grpc.client.options';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);
  // await app.startAllMicroservices();
  // await app.listen(3001);
  // console.log(`Application is running on: ${await app.getUrl()}`);
  const grpc = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'hero',
        url: '0.0.0.0:3001',
        protoPath: join(__dirname, './hero/hero.proto'),
        channelOptions: {},
      },
    },
  );
  await grpc.listen();
  console.log(`grpc is running on: 0.0.0.0:3001`);
}
bootstrap();
