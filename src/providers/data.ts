import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  private data: any;
  private apiKey = "WsMYOMf01Ph70C8m61dJukoZ5WIU8uzA";

  constructor(public httpClient: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  getOrders(): Observable<any> {
    return this.httpClient.get("https://api.mlab.com/api/1/databases/heroku_7dkkjm9t/collections/orders?apiKey=" + this.apiKey);
  }

  placeOrder(order): Promise<any> {
    console.log('place order');
    return this.httpClient.post("https://api.mlab.com/api/1/databases/heroku_7dkkjm9t/collections/orders?apiKey=" + this.apiKey,order).toPromise();
  }

  getMenuItems(): Observable<any> {
    return this.httpClient.get("https://api.mlab.com/api/1/databases/heroku_7dkkjm9t/collections/menu-items?apiKey=" + this.apiKey);
  }

  completeOrder(order):Promise<any> {
    const data = {"$set": {"status":"complete"}};
    return this.httpClient.put("https://api.mlab.com/api/1/databases/heroku_7dkkjm9t/collections/orders/"+order+"?apiKey=" + this.apiKey,data).toPromise();
  }

  addOrderer(id,orderer):Promise<any> {
    return this.httpClient.put("https://api.mlab.com/api/1/databases/heroku_7dkkjm9t/collections/orders/"+id+"?apiKey=" + this.apiKey,orderer).toPromise();
  }

  getCompletedOrders(): Observable<any>{
    const stat = JSON.stringify({"status":"complete"});
    return this.httpClient.get("https://api.mlab.com/api/1/databases/heroku_7dkkjm9t/collections/orders?q="+stat + "&apiKey="+this.apiKey);
  }

  getIncompleteOrders(): Observable<any>{
    const stat = JSON.stringify({"status":"incomplete"});
    return this.httpClient.get("https://api.mlab.com/api/1/databases/heroku_7dkkjm9t/collections/orders?q="+stat + "&apiKey="+this.apiKey);
  }
}
