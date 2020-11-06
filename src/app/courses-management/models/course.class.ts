export class Course {
    id: number;
    name: string;
    description: string;
    fee: number;

    constructor(name: string, description: string, fee: number) {
        this.name = name;
        this.description = description;
        this.fee = fee;
    }
}
