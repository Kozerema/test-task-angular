import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";

import { AppComponent } from './components/app.component';
import {PasswordComponent} from "./components/password/password.component";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PasswordComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
