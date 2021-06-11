import { Test, TestingModule } from '@nestjs/testing';
import { IUserDataAccess } from 'src/user/user.dataaccess.interface';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserServiceProvider } from './user.service.provider';
jest.mock('./user.service');

describe('UserController', () => {
  let controller: UserController;
  let service: IUserDataAccess;
  let user: User;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserServiceProvider]
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<IUserDataAccess>('IUserDataAccess');
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call the findAll method', async () => {
    const result = [{
      id: 1, name: 'test', password: 'test'
    }];
    jest.spyOn(service, 'fetchAll').mockReturnValue(result);
    var callResult = controller.findAll();
    expect(service.fetchAll).toHaveBeenCalled();
    expect(callResult).toBe(result);
  });
});
