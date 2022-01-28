import { mocked } from 'jest-mock';

import {
  transactionMockPayedAlice,
  userMockJohn,
  walletMockMain,
  walletMockSecondary,
} from '#/utils/fixtures';

export const transactionMockRepo = mocked<Api.Repositories.Transaction>(
  {
    create: jest.fn().mockResolvedValue(transactionMockPayedAlice),
    findByTransactionAndUserUuid: jest.fn().mockResolvedValue(transactionMockPayedAlice),
    findByTransactionAndUserUuidOrFail: jest.fn().mockResolvedValue(transactionMockPayedAlice),
    process: jest.fn().mockResolvedValue(transactionMockPayedAlice),
    updateState: jest.fn().mockResolvedValue({ affected: 1 }),
  },
  true,
);

export const userMockRepo = mocked<Api.Repositories.User>(
  {
    create: jest.fn().mockResolvedValue(userMockJohn),
    delete: jest.fn().mockResolvedValue({ affected: 1 }),
    findByUserUuid: jest.fn().mockResolvedValue(userMockJohn),
    findByUserUuidOrFail: jest.fn().mockResolvedValue(userMockJohn),
    findByValidCredentials: jest.fn().mockResolvedValue(userMockJohn),
  },
  true,
);

export const walletMockRepo = mocked<Api.Repositories.Wallet>(
  {
    create: jest.fn().mockResolvedValue(walletMockSecondary),
    findByWalletAndUserUuid: jest.fn().mockResolvedValue(walletMockMain),
    findByWalletAndUserUuidOrFail: jest.fn().mockResolvedValue(walletMockMain),
  },
  true,
);
