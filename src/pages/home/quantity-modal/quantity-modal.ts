import {Component} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'quantity-modal',
  templateUrl: 'quantity-modal.html',
})

export class QuantityModal {

  public order:any;
  public formGroup: FormGroup;
  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
    this.order = this.navParams.get('item');
    this.formGroup = new FormGroup({
      quantityValue: new FormControl('', Validators.required)
    });
  }

  placeOrder() {
    const qv = this.formGroup.get('quantityValue').value;
    this.viewCtrl.dismiss(qv);
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
