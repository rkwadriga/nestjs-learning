import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (configService: ConfigService): Promise<TypegooseModuleOptions> => {
  const host = configService.get('MONGO_DB_HOST');
  const port = configService.get('MONGO_DB_PORT');
  const user = configService.get('MONGO_DB_USERNAME');
  const pass = configService.get('MONGO_DB_PASSWORD');
  const dbname = configService.get('MONGO_DB_DBNAME');

  return {
    uri: `mongodb://${user}:${pass}@${host}:${port}/${dbname}`,
  };
}