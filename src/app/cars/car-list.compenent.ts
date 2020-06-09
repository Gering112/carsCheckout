import {Component,OnInit} from '@angular/core'
import {UserService} from '../login/user.service'
import { Iuser } from '../login/user'
import {Router} from '@angular/router'

@Component({
    selector : 'car-sel',
    templateUrl : './car-list.component.html',
    styleUrls : ['./car-list.css']
})

export class carListComponent implements OnInit{
    // list of cars

    constructor(private userService : UserService){}
    users: Iuser[] = []

    ngOnInit():void{
        this.userService.getUser().subscribe({
            next: users =>
            this.users = users
            })
    }

}

