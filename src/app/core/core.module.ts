import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginModule } from '../login/login.module';
import { TextModule } from '../text/text.module';
import { UiModule } from '../ui/ui.module';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    TextModule,
    UiModule,
    IconsModule
  ],
  exports: [
    LoginModule,
    TextModule,
    UiModule,
    IconsModule
  ]
})
export class CoreModule { }
