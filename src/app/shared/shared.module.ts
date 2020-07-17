import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LibraryModule } from '../library/library.module';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { IconsModule } from '../icons/icons.module';


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
    StateDirective,
    ReactiveFormsModule,
    IconsModule
  ]
})
export class SharedModule { }
