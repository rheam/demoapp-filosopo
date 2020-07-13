import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        UserService,
      ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUsers', () => {
    it('should return a collection of users', () => {
      const userResponse = [{
        _id: '1',
        usr_fullname: 'Jane Doe',
        usr_address: 'tokyo, Japan',
        usr_email: 'test@email.com'
      }];
      let response;
      spyOn(service, 'getUsers').and.returnValue(of(userResponse));

      service.getUsers().subscribe(res => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
  });

  describe('getUser', () => {
    it('should return a user', () => {
      const userResponse ={
        _id: '1',
        usr_fullname: 'Jane',
        usr_address: 'Designer',
        usr_email: 'Blastoise'
      }
      let response;
      spyOn(service, 'getUser').and.returnValue(of(userResponse));

      service.getUser('1').subscribe(res => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
  });

  describe('addUser', () => {
    it('should add a user', () => {
      const userResponse ={
        _id: '1',
        usr_fullname: 'Jane',
        usr_address: 'Designer',
        usr_email: 'Blastoise'
      }
      let response;
      spyOn(service, 'addUser').and.returnValue(of(userResponse));

      service.addUser(userResponse).subscribe(res => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
  });

  describe('deleteUser', () => {
    it('should delete a user', () => {
      const userResponse = {
        _id: '1',
        usr_fullname: 'Jane',
        usr_address: 'Designer',
        usr_email: 'Blastoise'
      }
      let response;
      spyOn(service, 'deleteUser').and.returnValue(of(userResponse));

      service.deleteUser(userResponse).subscribe(res => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
  });

  describe('updateUser', () => {
    it('should delete a user', () => {
      const userResponse ={
        _id: '1',
        usr_fullname: 'Jane',
        usr_address: 'Designer',
        usr_email: 'Blastoise'
      }
      let response;
      spyOn(service, 'updateUser').and.returnValue(of(userResponse));

      service.updateUser(userResponse).subscribe(res => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
  });
});
