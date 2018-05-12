import {Component} from '@angular/core';
import {App, LoadingController, ModalController, ToastController} from 'ionic-angular';
import {OrderModal} from "./order-modal/order-modal";
import {DataProvider} from "../../providers/data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public menuItems = [];
  private orderedItems:any;
  private currentOrder: any;

  constructor(public app: App, private data: DataProvider, public modalCtrl: ModalController, private toast: ToastController,
              private loadingCtrl: LoadingController) {
    this.orderedItems = new Set();
  }

  ionViewWillEnter() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present().then(() => {
      this.data.getMenuItems().subscribe(data => {
        this.menuItems = data;
        loading.dismiss();
      });
    });
  }

  openBasket(desc: string, price: number) {
    let orderModal = this.modalCtrl.create(OrderModal, {orders: this.orderedItems});
    orderModal.onDidDismiss(data => {
      if(data == true){
        this.showToast('Order completed');
      }
    });
    orderModal.present();
  }

  addOrder(order: any) {
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
}
