export class CourseData {
    title: string;
    shortDescription: string;
    longDescription: string;
    duration: number;

    constructor(title: string, shortDescription: string, longDescription: string, duration: number) {
        this.title = title;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.duration = duration;
    }


}
