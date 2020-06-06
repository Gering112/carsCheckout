import { Component,OnInit } from '@angular/core';
import { UserService } from '../login/user.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router'


@Component({
    selector : 'register-sel',
    templateUrl : './registeration-form.html',
    styleUrls : ['./register-form.css']
})

export class registerComponent implements OnInit {

    
    userNameField = ''
    firstNameField = ''
    lastNameField = ''
    emailField = ''
    passwordField = ''
    confirmPassField = ''
  
    constructor(private userService : UserService, private router : Router){}
    users: {}

    submitForm(form : NgForm):void{
        console.log("in sumbit: ", form.valid)
        if (form.valid){
            this.summitRegister()
            this.router.navigate(['./login'])
        }

    }

    summitRegister(): void{
        let newUser = {
            
            username : this.userNameField,
            firstname : this.firstNameField,
            lastname : this.lastNameField,
            email : this.emailField,
            password : this.passwordField,
    
        }
        this.userService.registerUser(newUser).subscribe(data => (console.log(data)))

        //console.log(newUser);
        // console.log(`user name is: ${this.userNameField}, firstname is: ${this.firstNameField}, 
        // email is: ${this.emailField},the password is: ${this.passwordField}`)
    }
    



    ngOnInit():void{

    }


}