export class UserDto {
    private name: string;
	private lastname: string;
	private mail: string;
	private password: string;
	private roles: number[];
	private courses: number[];

    constructor(name: string, lastname: string, mail: string, password: string, roles: number[], courses: number[]) {
        this.name = name;
        this.lastname = lastname;
        this.mail = mail;
        this.password = password;
        this.roles = roles;
        this.courses = courses;
    }
}
