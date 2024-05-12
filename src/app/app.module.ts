import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InitiatorDetailsComponent } from './Modules/initiator-details/initiator-details.component';
import { Module1Component } from './Modules/module1/module1.component';
import { Module2Component } from './Modules/module2/module2.component';
import { Module3Component } from './Modules/module3/module3.component';
import { LoginComponent } from './Modules/login/login.component';
import { Module4Component } from './Modules/module4/module4.component';
import { Module5Component } from './Modules/module5/module5.component';

@NgModule({
  declarations: [
    AppComponent,
    InitiatorDetailsComponent,
    Module1Component,
    Module2Component,
    Module3Component,
    LoginComponent,
    Module4Component,
    Module5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
