import { Component, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../models/profile/profile';
import { DataProvider } from '../../providers/data/data';
import { AuthProvider } from '../../providers/auth/auth';
import { Subscription } from 'rxjs/Subscription'
import { User } from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage implements OnDestroy{

  profile = {} as Profile;
  private authenticatedUser$: Subscription;
  private authenticatedUser: User;

  constructor(private data: DataProvider, private auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) =>{
      this.authenticatedUser = user;
    })
  }

  async saveProfile(){
    if(this.authenticatedUser){
      this.profile.email = this.authenticatedUser.email;
      const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
      console.log(result);
    }
  }
  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

}
