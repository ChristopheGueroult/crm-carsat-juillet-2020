import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOrdersComponent } from './pages/page-orders/page-orders.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditComponent } from './pages/page-edit/page-edit.component';

const routes: Routes = [
  { path: '', component: PageOrdersComponent },
  { path: 'add', component: PageAddOrderComponent },
  { path: 'edit/:id', component: PageEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
