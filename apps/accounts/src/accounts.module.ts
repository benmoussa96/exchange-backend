import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@app/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { Account, AccountSchema } from './schemas/accounts.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
      }),
      envFilePath: './apps/accounts/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
  ],
  controllers: [AccountsController],
  providers: [AccountsService],
})
export class AccountsModule {}
