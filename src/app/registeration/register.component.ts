import { Component,OnInit } from '@angular/core';
import { UserService } from '../login/user.service';
import { NgForm } from '@angular/forms';


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
    

    


    constructor(private userService : UserService){}
    users: {}


    loadUsers():void {
        //this.userService.registerUser(this.newUser).subscribe(data => console.log(data))
    }

    submitForm(form : NgForm):void{
        console.log("in sumbit: ", form.valid)
        if (form.valid){
            this.summitRegister()
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