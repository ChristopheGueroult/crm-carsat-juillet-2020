import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOrdersComponent } from './pages/page-orders/page-orders.component';
import { OrdersRoutingModule } from './orders-routing.module';



@NgModule({
  declarations: [PageOrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
