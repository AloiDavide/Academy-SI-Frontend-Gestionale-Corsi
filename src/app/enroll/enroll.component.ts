import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseService} from "../service/course/course.service";
import {CategoryDto} from "../../model/categoryDto";
import {FormsModule, NgForm} from "@angular/forms";
import {UserService} from "../service/user/user.service";
import {Router} from "@angular/router";
import {LocalStorageService} from "../service/local-storage/local.storage.service";
import {CategoryService} from "../service/category/category.service";
import {CourseDto} from "../../model/courseDto";
import {UserDto} from "../../model/userDto";

@Component({
    selector: 'app-enroll',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './enroll.component.html',
    styleUrl: './enroll.component.css',
    providers: [CourseService, UserService, CategoryService, LocalStorageService],
})
export class EnrollComponent {
    categories: CategoryDto[] = [];

    selectedCategory:string = "";

    courses: CourseDto[] = [];

    coursesByCategory: { [key: string]: CourseDto[] } = {}

    selectedList: CourseDto[] = [];

    selectedCourse:string = "";


    constructor(public courseService: CourseService, public userService: UserService, public categoryService:CategoryService, public localStorageService: LocalStorageService, private router: Router) {
        //get all categories
        this.categoryService.getAll().subscribe(result => {
            this.categories = result;
        })

        //get all courses
        this.courseService.getAll().subscribe(result => {
            console.log(result);
            this.courses = result;
        })

        //get courses divided by category name
        this.coursesByCategory = this.courseService.getAllByCategory();
    }


    onCategoryChange($event: Event, form:NgForm){
        const selectElement:HTMLSelectElement = $event.target as HTMLSelectElement;

        this.selectedCategory = selectElement.value;

        //TODO filter out the courses that the logged user is already subscribed to

        this.selectedList = this.coursesByCategory[this.selectedCategory];
    }

    onSubmit(enrollForm: NgForm) {
        console.log("Enroll request");

        if (!enrollForm.valid) {
            alert('Invalid form, please try again.');
            return;
        }
        const userJson: string | null = this.localStorageService.get("loggedUser");
        if (userJson === null){
            alert('Log into your account before trying to enroll.');
            return;
        }

        const loggedUser:UserDto = JSON.parse(userJson);

        const courseObject:CourseDto|undefined = this.courses.find(course => course.name === this.selectedCourse);

        if (courseObject === undefined){
            alert('The course you selected doesn\'t seem to exist.');
            return;
        }

        //Rest call to the backend to register a user
        this.userService.enrollToCourse(loggedUser.mail, courseObject.id).subscribe({
            next: (result) => {
                // On successful call

                // Navigate back to home.
                this.router.navigate(['/']);


                alert('The enroll was successful.');
                //TODO Redirect to the personal courses page as soon as that is implemented

            },
            error: (error) => {
                console.error(`Backend returned code ${error.status}, body was: `, error.error);

                alert('Enroll failed. Please try again later.');
            }
        });


    }


}
