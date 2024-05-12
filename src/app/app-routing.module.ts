import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitiatorDetailsComponent } from './Modules/initiator-details/initiator-details.component';
import { Module2Component } from './Modules/module2/module2.component';
import { Module1Component } from './Modules/module1/module1.component';
import { Module3Component } from './Modules/module3/module3.component';
import { LoginComponent } from './Modules/login/login.component';
import { Module4Component } from './Modules/module4/module4.component';
import { Module5Component } from './Modules/module5/module5.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'propertydetails',component:InitiatorDetailsComponent},
  {path:'module1',component:Module1Component},
  {path:'module2',component:Module2Component},
  {path:'module3',component:Module3Component},
  {path:'module4',component:Module4Component},
  {path:'module5',component:Module5Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
