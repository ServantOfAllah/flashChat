import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../models/accounts/acount.interface';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  account = {} as Account;

  constructor(private toast: ToastController, private afa: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async login() {
    try {
      const result = await this.afa.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
      this.toast.create({
        message: 'Login successfully',
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

  gotoPage(pageName: string){
    pageName ==='TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }

}
