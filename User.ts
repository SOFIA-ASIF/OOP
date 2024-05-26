export class User {
    private username: string;
    private password: string;
    private email: string;

    constructor(username: string, password: string, email: string) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public getUsername(): string {
        return this.username;
    }

    public validatePassword(password: string): boolean {
        return this.password === password;
    }

    public getEmail(): string {
        return this.email;
    }
}
