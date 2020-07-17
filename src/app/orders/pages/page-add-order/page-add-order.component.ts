import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {
  public title: string;
  public color = 'white';
  public item = new Order();
  constructor(private os: OrdersService, private router: Router) { }

  ngOnInit(): void {
    this.title = 'Add an Order';
  }

  public save(item: Order) {
    this.os.addItem(item).subscribe((res) => {
      console.log('Bravo mon poto tu as réussi à insérer un item, je te kiff, Muahhhh !');
      this.router.navigate(['orders']);
    });
  }

}
