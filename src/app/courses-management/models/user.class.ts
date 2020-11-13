export class User {
    id: number;
    name: string;
    password: string;
    email: string;
    phone: string;
    address: string;

    constructor(name: string, password: string,  email: string, phone: string, address: string) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
}
