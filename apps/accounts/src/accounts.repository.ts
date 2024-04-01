import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Account } from './schemas/accounts.schema';

@Injectable()
export class AccountsRepository extends AbstractRepository<Account> {
  protected readonly logger = new Logger(AccountsRepository.name);

  constructor(
    @InjectModel(Account.name) accountModel: Model<Account>,
    @InjectConnection() connection: Connection,
  ) {
    super(accountModel, connection);
  }
}
