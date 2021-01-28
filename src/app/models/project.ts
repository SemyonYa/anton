export class Project {
    id: number;
    title: string;
    description: string;
    img: string;

    constructor(
        id: number,
        title: string,
        description: string,
        img: string
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.img = img;
    }
}