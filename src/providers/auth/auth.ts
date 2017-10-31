import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthProvider {

  constructor(private auth:AngularFireAuth, public http: Http) {
    console.log('Hello AuthProvider Provider');
  }

getAuthenticatedUser(){
  return this.auth.authState;
}

}
