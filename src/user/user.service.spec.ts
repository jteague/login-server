import { Test, TestingModule } from '@nestjs/testing';
import { IUserDataAccess } from './user.dataaccess.interface';
import { UserService } from './user.service';
import { UserServiceProvider } from './user.service.provider';

describe('UserService', () => {
  let service: IUserDataAccess;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserServiceProvider],
    }).compile();

    service = module.get<IUserDataAccess>('IUserDataAccess');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
