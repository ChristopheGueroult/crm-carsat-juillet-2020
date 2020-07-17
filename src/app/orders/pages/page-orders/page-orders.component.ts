import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';
import { Subscription, Observable, Subject } from 'rxjs';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-orders',
  templateUrl: './page-orders.component.html',
  styleUrls: ['./page-orders.component.scss']
})
export class PageOrdersComponent implements OnInit, OnDestroy {
  // public collection: Order[];
  public collection$: Subject<Order[]> = new Subject();
  public title: string;
  public headers: string[];
  color = 'white';
  public states = Object.values(StateOrder);
  // private sub: Subscription;
  constructor(private os: OrdersService, private router: Router) { }

  ngOnInit(): void {
    this.headers = [
      'Action',
      'Type',
      'Client',
      'Nb Jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State',
    ];
    this.title = 'Orders List';
    // this.collection$ = this.os.collection;
    this.os.collection.subscribe((datas) => {
      this.collection$.next(datas);
    });
  }

  public changeState(item: Order, event) {
    // console.log(item);
    // console.log(event.target.value);
    this.os.changeState(item, event.target.value).subscribe((res) => {
      item.state = res.state;
    });
  }

  public action() {
    console.log('btn clicked');

  }

  public edit(item: Order) {
    this.router.navigate(['orders', 'edit', item.id]);
  }
  public delete(item: Order) {
    this.os.deleteItem(item).subscribe((res) => {
      // rafraichir collection
      this.os.collection.subscribe((datas) => {
        this.collection$.next(datas);
      });
    });
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

}
