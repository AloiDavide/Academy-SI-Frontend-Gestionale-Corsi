export class RegisterRequest {
    name: string;
    lastName: string;
    email: string;
    password: string;
    roles: number[];

    constructor(name: string, lastName: string, email: string, password: string, roles: number[]) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.roles = roles;
    }
}
