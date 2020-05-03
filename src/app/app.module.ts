import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { register } from './registeration/register.component';
import {FormsModule} from '@angular/forms'
import {account} from './account/account.component'
import {login} from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,register,login, account 
  ],
  imports: [
    BrowserModule, FormsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
