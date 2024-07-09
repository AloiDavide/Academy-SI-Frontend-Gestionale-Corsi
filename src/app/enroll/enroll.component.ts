import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-enroll',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './enroll.component.html',
    styleUrl: './enroll.component.css'
})
export class EnrollComponent {
    selectedCategory: string = "";

    courses:{ [key: string]: string[] } = {
        frontend: ['HTML & CSS', 'JavaScript', 'Angular', 'React'],
        backend: ['Node.js', 'Express', 'Java', 'Python'],
        fullstack: ['Full Stack Web Development', 'MERN Stack', 'MEAN Stack'],
        cybersecurity: ['Cybersecurity Basics', 'Ethical Hacking', 'Network Security']
    };

    selectedList: string[] = this.courses['frontend'];


    onCategoryChange($event: Event){
        const selectElement:HTMLSelectElement = $event.target as HTMLSelectElement;
        const category:string = selectElement.value;
        this.selectedCategory = category;
        this.selectedList = this.courses[category];

        console.log(this.selectedCategory);
        console.log(this.selectedList);
    }

    submit() {
        console.log("Add a model for this form");
    }
}
