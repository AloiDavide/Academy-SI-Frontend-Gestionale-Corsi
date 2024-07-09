export class CourseDto {
    id: number;
    name: string;
    shortDescription: string;
    fullDescription: string;
    duration: number;
    category: string;

    constructor() {
        this.id = 0;
        this.name = "";
        this.shortDescription = "";
        this.fullDescription = "";
        this.duration = 0;
        this.category = "";
    }


}
