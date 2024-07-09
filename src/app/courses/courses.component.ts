import {Component} from '@angular/core';
import {CourseCardComponent} from "../course-card/course-card.component";
import {CourseDto} from "../../model/courseDto";
import {CommonModule} from "@angular/common";
import {MyServiceService} from "../service/my-service.service";
import {CourseService} from "../service/course/course.service";

@Component({
    selector: 'app-courses',
    standalone: true,
    imports: [CourseCardComponent, CommonModule],
    templateUrl: './courses.component.html',
    styleUrl: './courses.component.css',
    providers: [CourseService]
})
export class CoursesComponent {
    categories: string[] = ['Frontend', 'Backend', 'Fullstack', 'Cybersecurity'];

    currentCategory: string = "frontend";

    //oggetti da ricevere con delle chiamate get al backend

    courses: { [key: string]: CourseDto[] } = {
        'frontend': [
            {title: 'Javascript', shortDescription: '', longDescription: '', duration: 5},
            {title: 'Angular', shortDescription: '', longDescription: '', duration: 7},
        ],
        'backend': [
            {title: 'Spring', shortDescription: '', longDescription: '', duration: 0},
            {title: 'SQL', shortDescription: '', longDescription: '', duration: 3},
        ],
        'fullstack': [
            {title: 'Java Web Development', shortDescription: '', longDescription: '', duration: 8},
            {title: 'Python Web Development', shortDescription: '', longDescription: '', duration: 0},
        ],
        'cybersecurity': [
            {title: 'Network security', shortDescription: '', longDescription: '', duration: 0},
            {title: 'Ethical hacking', shortDescription: '', longDescription: '', duration: 5},
        ]

    };

    constructor(private storage: MyServiceService) {
    }

    changeCategory(category: string) {
        this.currentCategory = category;
    }


//         frontend: ['HTML & CSS', 'JavaScript', 'Angular', 'React'],
//         backend: ['Node.js', 'SQL', 'Spring', 'JavaEE'],
//         fullstack: ['Full Stack Web Development', 'MERN Stack', 'MEAN Stack'],
//         cybersecurity: ['Cybersecurity Basics', 'Ethical Hacking', 'Network Security']


    // constructor() {
    // this.courses.push(new CourseData("","","",0, ""));
    // this.courses.push(new CourseData("Angular","","",7, "frontend"));
    // this.courses.push(new CourseData("Spring","","",6, "backend"));
    // this.courses.push(new CourseData("Ethical Hacking","","",8, "cybersecurity"));
    // console.log(this.courses);
    // }

}
