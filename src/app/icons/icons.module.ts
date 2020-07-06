import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDeleteComponent } from './components/icons/icon-delete.component';
import { IconEditComponent } from './components/icons/icon-edit.component';
import { IconNavComponent } from './components/icons/icon-nav.component';
import { IconCloseComponent } from './components/icons/icon-close.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [IconDeleteComponent, IconEditComponent, IconNavComponent, IconCloseComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [IconDeleteComponent, IconEditComponent, IconNavComponent, IconCloseComponent]
})
export class IconsModule { }
