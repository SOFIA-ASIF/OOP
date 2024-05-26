export class User {
    username;
    password;
    email;
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    getUsername() {
        return this.username;
    }
    validatePassword(password) {
        return this.password === password;
    }
    getEmail() {
        return this.email;
    }
}
