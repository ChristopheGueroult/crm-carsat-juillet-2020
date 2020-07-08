import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-page-orders',
  templateUrl: './page-orders.component.html',
  styleUrls: ['./page-orders.component.scss']
})
export class PageOrdersComponent implements OnInit {
  public collection: Order[];
  public title: string;
  color = 'white';
  constructor(private os: OrdersService) { }

  ngOnInit(): void {
    this.title = 'Orders List';
    this.os.collection.subscribe((datas) => {
      this.collection = datas;
      console.log(this.collection);
    });
  }

}
