import 'reflect-metadata';
import { User } from './entities/user.entity';
import { connectMongo } from './utils/database';

async function bootstrap() {
  await connectMongo();
  const user = new User();
  console.log('bootstraped');
}

bootstrap();
