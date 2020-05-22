import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//import { registerComponent } from './registeration/register.component';
import {FormsModule} from '@angular/forms'
import {accountComponent} from './account/account.component'
//import {loginComponent} from './login/login.component'
import {AppRoutingModule, routingComponents} from './app-routing.module'
import { navBarComponent } from './shared/navbar/navbar.component';
import { loginModalComponent } from './login/loginModal/loginModal.component';
import {HttpClientModule} from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,routingComponents, accountComponent,navBarComponent,loginModalComponent 
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule
  ],

  bootstrap: [AppComponent,navBarComponent]
})
export class AppModule { }
