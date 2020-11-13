export class Employee {
    constructor(
            public id: number,
            public name: string,
            public dateOfBirth: Date,
            public alias?: string, // optional, có thể có hoặc ko
            public jobCategory?: string, // optional,
    ) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.alias = alias;
        this.jobCategory = jobCategory;
    }
}
