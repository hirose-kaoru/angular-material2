import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from '@angular/material'

import { AppComponent } from './app.component';
import 'hammerjs';
import { TopComponent } from './top/top.component';
import { MiddleComponent } from './middle/middle.component';
import { UnderComponent } from './under/under.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    MiddleComponent,
    UnderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  exports: [MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
