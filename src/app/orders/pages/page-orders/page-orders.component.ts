import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-page-orders',
  templateUrl: './page-orders.component.html',
  styleUrls: ['./page-orders.component.scss']
})
export class PageOrdersComponent implements OnInit, OnDestroy {
  // public collection: Order[];
  public collection$: Observable<Order[]>;
  public title: string;
  public headers: string[];
  color = 'white';
  // private sub: Subscription;
  constructor(private os: OrdersService) { }

  ngOnInit(): void {
    this.headers = [
      'Type',
      'Client',
      'Nb Jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State',
    ];
    this.title = 'Orders List';
    this.collection$ = this.os.collection;
    // this.sub = this.os.collection.subscribe((datas) => {
    //   this.collection = datas;
    // });
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

}
