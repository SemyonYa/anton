export class Project {
    id: number;
    title: string;
    city: string;
    year: number;
    description: string;
    brief: string;
    img: string;
    type: number;

    constructor(
        id: number,
        title: string,
        brief: string,
        description: string,
        city: string,
        year: number,
        img: string,
        type: number,
    ) {
        this.id = id;
        this.title = title;
        this.brief = brief;
        this.description = description;
        this.city = city;
        this.year = year;
        this.img = img;
        this.type = type;
    }
}