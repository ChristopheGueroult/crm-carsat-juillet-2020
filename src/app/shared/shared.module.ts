import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TemplatesModule,
    TextModule
  ],
  exports: [
    TemplatesModule,
    TextModule
  ]
})
export class SharedModule { }
