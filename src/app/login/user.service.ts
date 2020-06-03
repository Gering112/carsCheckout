import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Iuser} from './user';


@Injectable({
    providedIn: 'root',
})

export class UserService{
    
    private login_serverUrl = "http://localhost:3000/login";
    constructor(private http: HttpClient){}

    getUser(): Observable<Iuser[]> {
        return this.http.get<Iuser[]>(this.login_serverUrl)
        
    }

    registerUser(user:Iuser): Observable<any> {
        return this.http.post<any>(this.login_serverUrl + '/register',user)
        
    }


}