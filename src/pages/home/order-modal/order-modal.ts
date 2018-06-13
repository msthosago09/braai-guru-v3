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

    this.formGroup = new FormGroup({
      grandTotal: new FormControl('', Validators.required),
      paymentMethod: new FormControl('', Validators.required),
      orderedBy: new FormControl('',Validators.required)
    });
    for (let obj of this.orders) {
      this.totalCost += obj.totalCost;
    }
  }

  placeOrder() {
    this.data.placeOrder(this.orders).then(() =>
      this.viewCtrl.dismiss(true)
  );
  }

  closeModal(){
    this.viewCtrl.dismiss(false);
  }
}
