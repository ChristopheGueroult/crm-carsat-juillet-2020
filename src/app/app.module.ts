import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr-FR' is optional
registerLocaleData(localeFr, 'fr-FR');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
