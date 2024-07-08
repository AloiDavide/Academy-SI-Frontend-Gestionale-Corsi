import { Component } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
    name: string = "Titolo corso";
    shortDescription: string = "Placeholder descrizione breve corso";
    duration:number = 5;
}
