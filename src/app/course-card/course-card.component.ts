import {Component, Input} from '@angular/core';
import {CourseDto} from "../../model/courseDto";


@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
    @Input()
    course!: CourseDto;

    @Input()
    imageName: string ="course_placeholder.jpg";

}
