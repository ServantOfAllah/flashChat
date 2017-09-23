import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MESSAGE_LIST } from '../mocks/messages/message';

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  messageList = MESSAGE_LIST;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.messageList);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }

}
