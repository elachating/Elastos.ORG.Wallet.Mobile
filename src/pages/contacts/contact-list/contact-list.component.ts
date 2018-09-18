import { Component} from '@angular/core';
import {ContactCreateComponent} from "../contact-create/contact-create.component";
import {ContactsComponent} from "../contacts.component";
import { NavController, NavParams} from 'ionic-angular';
import {WalletManager} from '../../../providers/WalletManager';
import {Native} from "../../../providers/Native";
import {LocalStorage} from "../../../providers/Localstorage";
import {Util} from "../../../providers/Util";
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent {

  contactUsers = [];
  constructor(public navCtrl: NavController,public navParams: NavParams, public walletManager: WalletManager,public native: Native,public localStorage:LocalStorage) {
        this.init();
  }
  init() {

    this.localStorage.get('contactUsers').then((val)=>{
      if (val) {
        this.contactUsers = Util.objtoarr(JSON.parse(val));
      }
    });
  }

  rightHeader(): void {
    this.native.Go(this.navCtrl,ContactCreateComponent);
  }

  onclick(id): void {
    this.native.Go(this.navCtrl,ContactsComponent,{id: id});
  }

}
