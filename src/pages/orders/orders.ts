import {Component} from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {DataProvider} from "../../providers/data";

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
  constructor(public navCtrl: NavController, public data: DataProvider, private toast: ToastController,
              private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
  }

  ionViewWillEnter(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present().then(() => {
      this.data.getMenuItems().subscribe(data => {
        this.orders = data;
        loading.dismiss();
      },error =>{
        const popupAlert = this.alertCtrl.create({
          title: 'Failed!',
          message: 'Retrying',
          buttons: ['OK'],
          enableBackdropDismiss: true
        });
        popupAlert.present();
        loading.dismiss();
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
      });
    });
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

  openMenuPage(){
    this.navCtrl.setRoot(HomePage);
  }

}
