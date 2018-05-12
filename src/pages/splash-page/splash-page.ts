import {Component} from '@angular/core';
import {App, ModalController, NavController, NavParams} from 'ionic-angular';
import {OrdersPage} from "../orders/orders";
import {LoginModal} from "./login-modal/login-modal";
import {HomePage} from "../home/home";

/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'splash-page',
  templateUrl: 'splash-page.html',
})
export class SplashPage {

  public orders = [];
  constructor(public app: App, public modalCtrl: ModalController) {
  }

  presentLoginModal() {
    let loginModal = this.modalCtrl.create(LoginModal);
    loginModal.onDidDismiss(data => {
      if(data === true){
        this.app.getRootNav().push(OrdersPage);

      }
    });
    loginModal.present();
  }

  goToMenu(){
    this.app.getRootNav().push(HomePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersPage');
  }

}