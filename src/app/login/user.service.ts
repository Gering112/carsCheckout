import {Injectable} from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {Iuser} from './user';
import { tap, catchError } from 'rxjs/operators';



@Injectable({
    providedIn: 'root',
})

export class UserService{
    
    private login_serverUrl = "http://localhost:3000/login";
    constructor(private http: HttpClient){}

    getUser(): Observable<Iuser[]> {
        return this.http.get<Iuser[]>(this.login_serverUrl).pipe(
            tap(data => console.log(JSON.stringify(data))),
            catchError(this.handleError)
        )
        
    }

    loginUser(user): Observable<any>{

      return this.http.post<any>(this.login_serverUrl+ '/userLogin',user)
        
    }

    registerUser(user:Iuser): Observable<any> {
        return this.http.post<any>(this.login_serverUrl + '/register',user)
    }
    
    public  handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }


}