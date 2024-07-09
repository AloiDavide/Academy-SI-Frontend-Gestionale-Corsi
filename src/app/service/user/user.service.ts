import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {UserDto} from "../../../model/userDto";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    //Dependency injection del client per le chiamate rest
    constructor(private http: HttpClient) {
    }

    getAll(): Observable<UserDto[]> {
        return this.http.get<UserDto[]>('http://localhost:8080/api/user/get/all').pipe(
            retry(3),
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        }
        else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
        }
         // Return an observable with a user-facing error message
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }
}


