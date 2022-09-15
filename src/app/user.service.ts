import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model, User } from './Model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  model =new Model();

  baseUrl:string ="https://localhost:7274/"

  constructor(private http: HttpClient) { }

 addUser(user:User):Observable<User>
  {
   return this.http.post<User>(this.baseUrl + 'api/user',user);
  }

  getUsers():Observable<User[]>
  {
    return this.http.get<User[]>(this.baseUrl + 'api/user');
  }

  deleteUser(user:User):Observable<User>
  {
    return this.http.delete<User>(this.baseUrl + 'api/user/' + user.userId)
  }

}
