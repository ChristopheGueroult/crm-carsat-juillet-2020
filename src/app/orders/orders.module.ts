import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { PageOrdersComponent } from './pages/page-orders/page-orders.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { FormOrderComponent } from './components/form-order/form-order.component';
import { PageEditComponent } from './pages/page-edit/page-edit.component';



@NgModule({
  declarations: [PageOrdersComponent, PageAddOrderComponent, FormOrderComponent, PageEditComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrdersModule { }
