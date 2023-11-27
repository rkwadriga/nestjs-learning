import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from './users/users.module';

const host = process.env.MONGO_DB_HOST;
const port = process.env.MONGO_DB_PORT;
const user = process.env.MONGO_DB_USERNAME;
const pass = process.env.MONGO_DB_PASSWORD;
const dbname = process.env.MONGO_DB_DBNAME;

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      //`mongodb://${user}:${pass}@${host}:${port}/${dbname}`,
      'mongodb://top:top@localhost:27018/top_api_db',
    ),
    AuthModule,
    TopPageModule,
    ProductModule,
    ReviewModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
