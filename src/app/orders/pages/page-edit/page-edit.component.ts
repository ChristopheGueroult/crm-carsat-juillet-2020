import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.scss']
})
export class PageEditComponent implements OnInit {
  public title = 'Edit an order';
  public color = 'white';
  // public item: Order;
  public item$: Observable<Order>;
  constructor(
    private route: ActivatedRoute,
    private os: OrdersService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.item$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.os.getItemById(params.get('id')))
    );

    // this.route.paramMap.subscribe((datas) => {
    //   console.log(datas.get('id'));
    //   this.os.getItemById(datas.get('id')).subscribe((res) => {
    //     console.log(res);
    //     this.item = res;
    //   });
    // });
  }

  public save(item: Order) {
    this.os.updateItem(item).subscribe((res) => {
      this.router.navigate(['orders']);
    });
  }


}
