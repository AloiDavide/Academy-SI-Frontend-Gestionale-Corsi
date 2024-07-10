export class CategoryDto {
    id: number;
    categoryName: string;

    constructor(categoryName: string = "") {
        this.id = 0;
        this.categoryName = categoryName;
    }

}
