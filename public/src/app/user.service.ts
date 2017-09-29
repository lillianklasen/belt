import { Injectable } from '@angular/core';
import { User } from './user';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  currentUser: User = null;

  constructor(private _http: Http) { }

  index(callback) {
   this._http.get('/users').subscribe(
     res => callback(res.json()),
     err => console.log(err)
   );
 }

  createUser(newUser: User, callback) {
      this._http.post('/users', newUser).subscribe(
          res => callback(res.json()),
          err => console.log(err)
      );
  }

  // authenticate(user: User, callback){
  //     this._http.post('/login', user).subscribe(
  //         res => callback(res.json()),
  //         err => console.log(err)
  //     );
  // }

  session(callback){
      this._http.get('/session').subscribe(
          res => callback(res.json()),
          err => console.log(err)
      );
  }

  getCurrentUser(){
     return this.currentUser;
 }

  logout(callback){
      this._http.delete('/users').subscribe(
          res => callback(res.json()),
          err => console.log(err)
      );
  }

}
