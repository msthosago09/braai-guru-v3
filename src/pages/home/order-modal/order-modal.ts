import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Component} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";
import {DataProvider} from "../../../providers/data";

@Component({
  selector: 'order-modal',
  templateUrl: 'order-modal.html',
})

export class OrderModal {

  public formGroup: FormGroup;
  public ordersSet: Set<any>;
  public orders:any;
  public paymentM = 'Cash';
  public totalCost = 0;
  private arrayLength = 0;

  constructor(private viewCtrl: ViewController, private data: DataProvider, private navParams: NavParams) {
    this.ordersSet = new Set();
    this.ordersSet = this.navParams.get('orders');
    this.orders = Array.from(this.ordersSet);
    this.arrayLength  = this.orders.length;

    for(let i = 0; i < this.arrayLength;i++){

    }

    this.formGroup = new FormGroup({
      quantity: new FormControl('', Validators.required),
      paymentMethod: new FormControl('', Validators.required),
    });
  }

  quantityChange(quantChange){

  }

  placeOrder() {

  }

  closeModal(){
    this.viewCtrl.dismiss(false);
  }

  dismiss(status: boolean) {
    this.viewCtrl.dismiss(status);
  }
}
