import {Component} from '@angular/core';
import {CourseCardComponent} from "../course-card/course-card.component";
import {CourseDto} from "../../model/courseDto";
import {CommonModule} from "@angular/common";
import {CourseService} from "../service/course/course.service";
import {CategoryService} from "../service/category/category.service";
import {CategoryDto} from "../../model/categoryDto";

@Component({
    selector: 'app-courses',
    standalone: true,
    imports: [CourseCardComponent, CommonModule],
    templateUrl: './courses.component.html',
    styleUrl: './courses.component.css',
    providers: [CourseService, CategoryService]
})
export class CoursesComponent {
    categories: CategoryDto[] = [];

    currentCategory: string = "frontend";

    courses: CourseDto[] = [];

    coursesByCategory: { [key: string]: CourseDto[] } = {}

    constructor(private courseService: CourseService, private categoryService: CategoryService) {
        //get all category names
        this.categoryService.getAll().subscribe(result => {
            console.log("Categories: \n"+result);
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

    onChangeCategory(category: CategoryDto) {
        this.currentCategory = category.categoryName;
    }

}
