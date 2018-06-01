import {Component} from '@angular/core';
import {App, ModalController, NavController} from 'ionic-angular';
import {OrdersPage} from "../orders/orders";
import {HomePage} from "../home/home";
import {LoginModal} from "../login-modal/login-modal";

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

  constructor(public app: App, public modalCtrl: ModalController, private navCtrl: NavController) {
  }

  presentLoginModal() {
    let loginModal = this.modalCtrl.create(LoginModal);
    loginModal.onDidDismiss(data => {
      if (data === true) {
        this.navCtrl.setRoot(OrdersPage);
      }
    });
    loginModal.present();
  }

  goToMenu() {
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersPage');
  }

}
