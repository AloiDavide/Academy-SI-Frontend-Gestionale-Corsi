import {Injectable} from '@angular/core';
import {catchError, Observable, retry, throwError} from "rxjs";
import {CategoryDto} from "../../../model/categoryDto";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<CategoryDto[]> {
        return this.http.get<CategoryDto[]>('http://localhost:8080/api/category/get/all').pipe(
            retry(3),
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred in CategoryService:', error.error);
        }
        else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
        }

        return throwError(() => new Error('Something bad happened; please try again later.'));
    }

}
