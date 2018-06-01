import {Component} from '@angular/core';
import {AlertController, App, LoadingController, ModalController, NavController, ToastController} from 'ionic-angular';
import {OrderModal} from "./order-modal/order-modal";
import {DataProvider} from "../../providers/data";
import {OrdersPage} from "../orders/orders";
import {LoginModal} from "../login-modal/login-modal";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public menuItems = [];
  private orderedItems:any;
  private currentOrder: any;

  constructor(public app: App, private data: DataProvider, public modalCtrl: ModalController, private toast: ToastController,
              private loadingCtrl: LoadingController, private alertCtrl: AlertController, private navCtrl:NavController) {
    this.orderedItems = new Set();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

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
      this.data.getMenuItems().subscribe(data => {
        this.menuItems = data;
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

  openBasket() {
    if(this.orderedItems.size === 0){
      return;
    }
    let orderModal = this.modalCtrl.create(OrderModal, {orders: this.orderedItems});
    orderModal.onDidDismiss(data => {
      if(data == true){
        this.showToast('Order completed');
      }
    });
    orderModal.present();
  }

  addOrder(order: any) {
    order.quantity = 1;
    this.orderedItems.add(order);
    this.showToast('Item added');
    console.log(this.orderedItems)
  }

  showToast(msg:string) {
    let toast = this.toast.create({
      message: msg,
      duration: 700,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

  openLoginModal(){
    let loginModal = this.modalCtrl.create(LoginModal);
    loginModal.onDidDismiss(data => {
      if(data === true){
        this.navCtrl.setRoot(OrdersPage);
      }
    });
    loginModal.present();
  }
}
