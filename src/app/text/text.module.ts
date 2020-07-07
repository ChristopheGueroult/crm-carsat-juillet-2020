import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './components/text/text.component';
import { AletBoxesTextComponent } from './components/alet-boxes-text/alet-boxes-text.component';



@NgModule({
  declarations: [TextComponent, AletBoxesTextComponent],
  imports: [
    CommonModule
  ],
  exports: [TextComponent, AletBoxesTextComponent]
})
export class TextModule { }
