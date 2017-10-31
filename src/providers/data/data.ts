import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { User } from 'firebase/app';
import { Profile } from '../../pages/models/profile/profile';

@Injectable()
export class DataProvider {

  profileOblect: FirebaseObjectObservable<Profile>

  constructor(public database: AngularFireDatabase) {
    console.log('Hello DataProvider Provider');
  }

   async saveProfile(user: User, profile: Profile){
     this.profileOblect = this.database.object(`/profiles/${user.uid}`);
    try{
      await this.profileOblect.set(profile)
     }
     catch(e){
       console.error(e);
       return false;
     }
   }

}
