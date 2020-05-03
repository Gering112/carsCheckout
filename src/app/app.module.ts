import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { register } from './registeration/register.component';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent, register
  ],
  imports: [
    BrowserModule, FormsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
