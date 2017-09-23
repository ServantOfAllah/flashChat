import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../models/accounts/acount.interface';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  account = {} as Account

  constructor(private toast: ToastController, private afa: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async register() {
    try {
      const result = await this.afa.auth.createUserWithEmailAndPassword(this.account.email, this.account.password)
      this.toast.create({
        message: 'Account created successfully',
        duration: 3000
      }).present();
      console.log(result);
    } catch (e) {
      console.error(e);
      this.toast.create({
        message: e.message,
        duration: 3000
      }).present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
