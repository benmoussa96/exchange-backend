import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Account extends AbstractDocument {
  @Prop()
  address: string;

  @Prop()
  network: number;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
