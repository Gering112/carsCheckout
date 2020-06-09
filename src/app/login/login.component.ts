import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import {UserService} from './user.service'
import { Iuser } from './user';



@Component({
    selector : 'login-sel',
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.css']
})

export class loginComponent implements OnInit{
    userNameField = ''
    passwordField = ''
    users: Iuser[] = []
    constructor(private userService : UserService, private router:Router){}
    
    
    

    logginIn():void{
        let loginUserData = {
            username: this.userNameField,
            password: this.passwordField
        }

        this.userService.loginUser(loginUserData).subscribe(
            res => console.log(res),
            err => console.log(err)
        )
    }
    loadUsers():void {
        this.router.navigate(['./carList'])
        this.userService.getUser().subscribe(data => console.log(data))
    }

    ngOnInit():void{
    // Your code for handling the data you get from the API
    //     fetch("http://localhost:3000/users")
    //     .then((resp) => resp.json()) // Call the fetch function passing the url of the API as a parameter
    //     .then(function(data) {
    //         console.log(data)
    //         debugger;
    // })
    // .catch(function() {
    //     debugger;
    // // This is where you run code if the server returns any errors
    // });
    this.userService.getUser().subscribe({
        next: users =>
        this.users = users
        })
    }
 

    
}