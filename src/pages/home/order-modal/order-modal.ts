import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Component} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";
import {DataProvider} from "../../../providers/data";
import {iterateListLike} from "@angular/core/src/change_detection/change_detection_util";

@Component({
  selector: 'order-modal',
  templateUrl: 'order-modal.html',
})

export class OrderModal {

  public formGroup: FormGroup;
  public ordersSet: Set<any>;
  public orders: any;
  public paymentM = 'Cash';
  public totalCost = 0;
  private arrayLength = 0;

  constructor(private viewCtrl: ViewController, private data: DataProvider, private navParams: NavParams) {
    this.ordersSet = new Set();
    this.ordersSet = this.navParams.get('orders');
    this.orders = Array.from(this.ordersSet);
    this.arrayLength = this.orders.length;

    this.formGroup = new FormGroup({
      grandTotal: new FormControl('', Validators.required),
      paymentMethod: new FormControl('', Validators.required),
      orderedBy: new FormControl('', Validators.required)
    });
    for (let obj of this.orders) {
      this.totalCost += obj.totalCost;
    }
  }

  placeOrder() {
    const orderer = this.formGroup.get('orderedBy').value;
    const data = {"$set": {"orderedBy":orderer}};
    this.data.placeOrder(this.orders).then(() => {
        for (let order of this.orders) {
           this.data.addOrderer(order._id,data).then(() => {
           })
        }
        this.viewCtrl.dismiss(true)
      }
    );
  }

  closeModal() {
    this.viewCtrl.dismiss(false);
  }
}
