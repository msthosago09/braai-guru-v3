import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Component} from "@angular/core";
import {AlertController, LoadingController, ViewController} from "ionic-angular";
import {DataProvider} from "../../../providers/data";

@Component({
  selector: 'login-modal',
  templateUrl: 'login-modal.html',
})

export class LoginModal {

  public formGroup: FormGroup;
  private users = [];
  private status: boolean;

  constructor(private viewCtrl: ViewController, private data: DataProvider, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    this.status = false;
    this.formGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  logon() {
    const uname = this.formGroup.get('username').value;
    const password = this.formGroup.get('password').value;
    if (uname == '' || password == ''){
      return;
    }
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.data.getUserInfo().subscribe(
      userInfo => {
        console.log(userInfo[0].password);
        this.users = userInfo;
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].username == uname) {
            if (this.users[i].password == password) {
              this.status = true;
            }
          }
        }
        loading.dismiss();
        if (this.status == true) {
          this.viewCtrl.dismiss(true);
        } else {
          this.formGroup.patchValue({
            password: ''
          });
          this.showAlert();
        }
      }, error => {
        loading.dismiss()
      });
  }

  showAlert() {
    const popupAlert = this.alertCtrl.create({
      title: 'Error!',
      message: 'Incorrect details',
      buttons: ['OK'],
      enableBackdropDismiss: true
    });
    popupAlert.present();
  }
}
