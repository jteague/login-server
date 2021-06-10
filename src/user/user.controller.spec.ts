import { Test, TestingModule } from '@nestjs/testing';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
jest.mock('./user.service');

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;
  let user: User;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
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
