import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {UserDto} from "../../../model/userDto";
import {catchError, Observable, retry, throwError} from "rxjs";
import {RegisterRequest} from "../../../model/registerRequest";
import {LoginRequest} from "../../../model/loginRequest";
import {CourseDto} from "../../../model/courseDto";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    RETRY_COUNT: number = 3;

    constructor(private http: HttpClient) {    //Dependency injection del client per le chiamate rest
    }

    getAll(): Observable<UserDto[]> {
        return this.http.get<UserDto[]>('http://localhost:8080/api/user/get/all').pipe(
            retry(this.RETRY_COUNT)
        );
    }

    getUserByMail(email: string): Observable<UserDto> {
        return this.http.get<UserDto>('http://localhost:8080/api/user/get/' + email).pipe(
            retry(this.RETRY_COUNT)
        );
    }


    register(registerRequest: RegisterRequest) {
        //Here the request dto is passed as is.
        return this.http.post<any>('http://localhost:8080/api/user/reg', registerRequest).pipe(
            retry(this.RETRY_COUNT)
        );
    }

    login(loginRequest: LoginRequest){
        //This time the request dto is passed as a json.
        var headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<any>('http://localhost:8080/api/user/login', JSON.stringify(loginRequest), {headers: headers}).pipe(
            retry(this.RETRY_COUNT)
        );

    }

    enrollToCourse(email: string, courseId: number) {
        return this.http.put<any>('http://localhost:8080/api/user/'+email+'/subscribe/'+courseId, {}).pipe(
            retry(this.RETRY_COUNT)
        );
    }




}


