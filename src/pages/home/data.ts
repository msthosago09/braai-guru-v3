import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  private apiKey: String;

  constructor(public httpClient: HttpClient) {
    console.log('Hello DataProvider Provider');
    this.apiKey = "WsMYOMf01Ph70C8m61dJukoZ5WIU8uzA";

  }
  getOrders(): Observable<any> {
    return this.httpClient.get("https://api.m.com/api/1/databases/heroku_7dkkjm9t/collections/orders?apiKey="+this.apiKey);
  }

  placeOrder(order): Promise<any> {
    return null;
  }

  getMenuItems(): Observable<any> {
    return this.httpClient.get("https://api.m.com/api/1/databases/heroku_7dkkjm9t/collections/menu-items?apiKey="+this.apiKey);
  }

  addMenuItem(menuItem): Promise<any> {
    return null;
  }

  deleteMenuItem(id): Observable<any> {
    return null;
  }

  completeOrder(id): Observable<any> {
    return null;
  }
}
