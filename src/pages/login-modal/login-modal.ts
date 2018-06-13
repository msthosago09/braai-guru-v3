import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Component} from "@angular/core";
import {ViewController} from "ionic-angular";

@Component({
  selector: 'login-modal',
  templateUrl: 'login-modal.html',
})

export class LoginModal {

  public formGroup: FormGroup;
  private status: boolean;

  constructor(private viewCtrl: ViewController) {
    this.status = false;
    this.formGroup = new FormGroup({
      password: new FormControl('', Validators.required)
    });
  }

  closeModal(){
    this.viewCtrl.dismiss(false);
  }

  logon() {
    const password = this.formGroup.get('password').value;
    if (password === '5432' || password === '9999') {
      this.status = true;
    }
    if (this.status == true) {
      this.viewCtrl.dismiss(true);
    } else {
      this.formGroup.patchValue({
        password: ''
      });
    }
  }
}
