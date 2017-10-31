import { Component, EventEmitter, Output } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../models/accounts/acount.interface';
import { LoginResponse } from '../models/login/login-response.interface';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  account = {} as Account;
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private toast: ToastController, private afa: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  async login() {
    try {
      const result: LoginResponse = {
        result: await this.afa.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
      }
      this.loginStatus.emit(result);
      console.log(result);
      this.toast.create({
        message: `Welcome to flashChat, ${result.result.email} `,
        duration: 3000
      }).present();
      this.navCtrl.setRoot('EditProfilePage');
      console.log(result);
      
    } catch (e) {
      console.error(e);
      this.loginStatus.emit(e);
      this.toast.create({
        message: e.message,
        duration: 3000
      }).present();
    }
  }

  loginEvent(event){
    console.log(event);
  }

  gotoRegPage(){
    this.navCtrl.push('RegisterPage')
  }

}
