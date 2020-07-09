import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private pCollection: Observable<Order[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`);
  }

  // get collection
  get collection(): Observable<Order[]> {
    return this.pCollection;
  }

  // set collection
  set collection(col: Observable<Order[]>) {
    this.pCollection = col;
  }


  // change state of item
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    // item.state = state;
    const obj = {...item};
    obj.state = state;
    return this.updateItem(obj);
  }

  // update item in collecion
  public updateItem(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item);
  }

  // add item in collection

  // delete item in collection

  // get item by id from collection
}
