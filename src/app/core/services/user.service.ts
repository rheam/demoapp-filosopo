import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, map, tap, delay } from 'rxjs/operators';

import { User } from '../../user';
import { USERS } from '../mocks/mock-users';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
  }

  private UsersUrl = 'http://localhost:3000/users'; 

  /** GET all users. Will 404 if id not found */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.UsersUrl)
  }

  /** GET user by id. Will 404 if id not found */
  getUser(id): Observable<User> {
    const url = `${this.UsersUrl}/${id}`;
    return this.http.get<User>(url) 
  }

  /** PUT: update the user on the server */
  updateUser(user: User): Observable<any> {
    return this.http.put(this.UsersUrl+'/'+user._id, user, this.httpOptions)
  }

  /** DELETE: delete the user from the server */
  deleteUser(user: User | string): Observable<User> {
    const id = typeof user === 'string' ? user : user._id;
    const url = `${this.UsersUrl}/${id}`;
    return this.http.delete<User>(url, this.httpOptions)
  }

  /** POST: add a new user to the server */
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.UsersUrl, user, this.httpOptions)
  }
}
