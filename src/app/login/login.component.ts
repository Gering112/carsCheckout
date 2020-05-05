import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'

@Component({
    selector : 'login-sel',
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.css']

})
export class loginComponent implements OnInit{
    userNameField = ''
    passwordField = ''

    loginClick():void{

        alert(`user name is: ${this.userNameField} and the password is: ${this.passwordField}`)
        
    }
   
    ngOnInit():void{

    }
    
}