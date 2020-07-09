import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { LibraryModule } from '../library/library.module';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [TotalPipe],
  imports: [
    CommonModule,
  ],
  exports: [
    TemplatesModule,
    TextModule,
    LibraryModule,
    TotalPipe
  ]
})
export class SharedModule { }
