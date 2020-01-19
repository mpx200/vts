/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import { NestFactory } from '@nestjs/core';
import * as config from 'config';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const globalPrefix = 'api';
  const serverConfig: any = config.has('server')
    ? config.get('server')
    : console.error(
        'server { port or origin } not defined in env or in config'
      );

  app.setGlobalPrefix(globalPrefix);
  const port = serverConfig.port;
  const origin = process.env.BD_API_ORIGIN || serverConfig.origin;
  await app.listen(port, () => {
    console.log('Listening at: ' + origin + ':' + port + '/' + globalPrefix);
  });
}

bootstrap();
