import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiComponentLibModule } from './ui-component-lib/ui-component-lib.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiComponentLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
