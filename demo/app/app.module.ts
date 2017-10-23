import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HijriModule } from '../../src';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, HijriModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
