export class User {
    id: number;
    name: string;
    password: string;
    email: string;
    phone: string;

    constructor(name: string, password: string,  email: string, phone: string) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.phone = phone;
    }
}
