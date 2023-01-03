import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'hero',
    // url: '0.0.0.0:3002',
    protoPath: join(__dirname, './hero/hero.proto'),
  },
};
