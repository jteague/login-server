import { Injectable } from '@nestjs/common';
import { IUserDataAccess } from 'src/user/user.dataaccess.interface';
import { User } from './entities/user.entity';

//@Injectable()
export class UserService implements IUserDataAccess {

  private _index = 4;

  users = [{
    id: 1,
    name: 'jteague',
    password: 'password'
  },
  {
    id: 2,
    name: 'kteague',
    password: 'password'
  },
  {
    id: 3,
    name: 'rteague',
    password: 'password'
  }];

  insert(user: User) : boolean {
    user.id = this._index;
    try {
      this.users.join(JSON.stringify(user));
      this._index++;
      return true;
    } catch(error) {
      // todo: log the error
      console.log('Error inserting User: ' + error);
      return false;
    }
  }

  update(user: User) : boolean {
    if (user.id) {
      var userJson = this.users.filter(u => u.id == user.id);
      // uhh...
    }
    return true;
  }

  remove(id: number) : boolean {
    return true;
  }
  
  fetchAll() : User[] {
    return this.users;
  }

  fetch(id: number) : User {
    var userJson = this.users.filter(u => u.id == id);
    var user = new User();
    Object.assign(user, userJson);
    return user;
  }
}
