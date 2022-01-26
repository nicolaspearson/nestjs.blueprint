import { Connection } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';

import User from '$/db/entities/user.entity';
import Wallet from '$/db/entities/wallet.entity';
import { generateSalt } from '$/db/utils/user.util';

@Injectable()
export class UserWalletRepository {
  constructor(
    @InjectConnection()
    private readonly connection: Connection,
  ) {}

  create(data: { email: Email; password: string }): Promise<User> {
    return this.connection.manager.transaction<User>(async (manager): Promise<User> => {
      // Create the user with the required fields populated.
      const partialUser: QueryDeepPartialEntity<User> = {
        email: data.email,
        // The pgcrypto extension salts and hashes the user's password.
        password: generateSalt(data.password, "'bf', 8"),
      };
      const user = await manager.save(User, partialUser as User);

      // Create the default wallet for the user.
      const partialWallet: QueryDeepPartialEntity<Wallet> = {
        balance: 0,
        name: 'Main',
        transactions: [],
        user,
      };
      const wallet = await manager.save(Wallet, partialWallet as Wallet);

      // Assign the default wallet to user object so that it is available to upstream consumers.
      user.wallets = [wallet];
      return user;
    });
  }
}
