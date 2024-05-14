export class Categories {
    category: string;
    count: string;

    constructor(
        category: string,
        count: string = '') {
        this.category = category;
        this.count = count;
    };
}
