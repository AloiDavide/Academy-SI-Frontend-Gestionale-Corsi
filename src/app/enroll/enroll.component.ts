import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseDto} from "../../model/courseDto";
import {CourseService} from "../service/course/course.service";
import {CategoryDto} from "../../model/categoryDto";

@Component({
    selector: 'app-enroll',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './enroll.component.html',
    styleUrl: './enroll.component.css'
})
export class EnrollComponent {
    categories: CategoryDto[] = [];

    selectedCategory: string = "";

    courseTitles:{ [key: string]: string[] } = {};

    selectedList: string[] = [];



    constructor(private courseService: CourseService) {
        this.courseService.getAllCategories().subscribe(result => {

            this.categories = result;

            result.forEach(category => {
                this.courseService.getByCategory(category.id).subscribe(result => {
                    this.courseTitles[category.categoryName.toLowerCase()] = result.map(course => course.name);
                })
            })
        })


    }


    onCategoryChange($event: Event){
        const selectElement:HTMLSelectElement = $event.target as HTMLSelectElement;
        const category:string = selectElement.value;
        console.log(category);
        this.selectedCategory = category;
        this.selectedList = this.courseTitles[category];


    }

    submit() {
        //TODO Add a model for this form
        console.log("Enroll submission");
    }
}
