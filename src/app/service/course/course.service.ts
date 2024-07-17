import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CourseDto} from "../../../model/courseDto";
import {catchError, Observable, retry, throwError} from "rxjs";
import {CategoryDto} from "../../../model/categoryDto";
import {CategoryService} from "../category/category.service";

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    constructor(private http: HttpClient, private categoryService: CategoryService) {
    }


    getAll(): Observable<CourseDto[]> {
        return this.http.get<CourseDto[]>('http://localhost:8080/api/course/get/all').pipe(
            retry(3),
            catchError(this.handleError)
        );
    }


    getByCategory(categoryId: number): Observable<CourseDto[]> {
        return this.http.get<CourseDto[]>('http://localhost:8080/api/course/get/byCategory/'+categoryId).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }

    getAllByCategory(){
        //get all categories
        let coursesByCategory: { [key: string]: CourseDto[] } = {}

        this.categoryService.getAll().subscribe(result => {

            result.forEach(category => {
                this.getByCategory(category.id).subscribe(result => {
                    coursesByCategory[category.categoryName] = result;
                })
            })
        })

        return coursesByCategory;
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred in CourseService:', error.error);
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


