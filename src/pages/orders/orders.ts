import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {

  public orders = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersPage');
  }

  processOrder(id) {
      let toast = this.toast.create({
        message: 'Order completed',
        duration: 700,
        position: 'bottom'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
      toast.present();
  }

}
