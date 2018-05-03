import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {DataProvider} from "./data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public menuItem = [];
  private apiKey: String;

  constructor(public navCtrl: NavController, private data: DataProvider) {
    this.apiKey = "kS8RS_y8mDFdM8AlwPkQ98YDiQy5w2A8";
  }


  ionViewWillEnter() {
    console.log("LOAD HOME PAGE");
    this.data.getMenuItems().subscribe(data => {
      console.log(data);
    })
  }

}
