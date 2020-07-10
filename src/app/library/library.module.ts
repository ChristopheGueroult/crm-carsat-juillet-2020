import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TableDarkComponent } from './components/table-dark/table-dark.component';



@NgModule({
  declarations: [TableLightComponent, BtnComponent, TableDarkComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TableLightComponent, BtnComponent, TableDarkComponent]
})
export class LibraryModule { }
