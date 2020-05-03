import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { registerComponent } from './registeration/register.component';
import {FormsModule} from '@angular/forms'
import {accountComponent} from './account/account.component'
//import {loginComponent} from './login/login.component'
import {AppRoutingModule, routingComponents} from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,registerComponent,routingComponents, accountComponent 
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
