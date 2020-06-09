import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import {accountComponent} from './account/account.component'
//import {loginComponent} from './login/login.component'
import {AppRoutingModule, routingComponents} from './app-routing.module'
import { navBarComponent } from './shared/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http'; 
import { JwtModule } from '@auth0/angular-jwt';


@NgModule({
  declarations: [
    AppComponent,routingComponents, accountComponent,navBarComponent,
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule,

    // add the localhost:3000 URL to the white-listed domains so only Angular application that's running from this address will receive the access tokens.
    // black-listed the localhost:3000/auth/login URL because it doesn't need to receive any access token.
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('access_token');},
        whitelistedDomains: ['localhost:3000/login'],
        //blacklistedRoutes: ['http://localhost:3000/auth/login']
      }
    })
  ],

  bootstrap: [AppComponent,navBarComponent]
})
export class AppModule { }
