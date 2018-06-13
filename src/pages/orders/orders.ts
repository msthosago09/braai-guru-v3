import {Component} from '@angular/core';
import {AlertController, LoadingController, NavController, ToastController} from 'ionic-angular';
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

  public completeOrders = [];
  public incompleteOrders = [];
  constructor(public navCtrl: NavController, public data: DataProvider, private toast: ToastController,
              private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.data.getCompletedOrders().subscribe(comp => {
      this.completeOrders = comp;
      this.data.getIncompleteOrders().subscribe(incomp => {
        this.incompleteOrders = incomp;
      });
    }, error => {
      const popupAlert = this.alertCtrl.create({
        title: 'Failed!',
        message: 'Retrying',
        buttons: ['OK'],
        enableBackdropDismiss: true
      })
      popupAlert.present();
    });
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  ionViewWillEnter() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present().then(() => {
      this.data.getIncompleteOrders().subscribe(data => {
        this.incompleteOrders = data;
        this.data.getCompletedOrders().subscribe(comp => {
          this.completeOrders = comp;
        });
        loading.dismiss();
      }, error => {
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

    this.data.completeOrder(id).then(()=>{
      toast.present();
    });
  }

  openMenuPage() {
    this.navCtrl.setRoot(HomePage);
  }

}
