import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { LibraryModule } from '../library/library.module';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';



@NgModule({
  declarations: [TotalPipe, StateDirective],
  imports: [
    CommonModule,
  ],
  exports: [
    TemplatesModule,
    TextModule,
    LibraryModule,
    TotalPipe,
    StateDirective
  ]
})
export class SharedModule { }
