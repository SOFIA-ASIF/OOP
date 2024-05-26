import { User } from './User.js';

export class UserManager {
    private users: User[] = [];

    public signup(username: string, password: string, email: string): string {
        if (this.users.find(user => user.getUsername() === username)) {
            return 'Username already taken.';
        }
        const newUser = new User(username, password, email);
        this.users.push(newUser);
        return 'Signup successful!';
    }

    public login(username: string, password: string): string {
        const user = this.users.find(user => user.getUsername() === username);
        if (user && user.validatePassword(password)) {
            return 'Login successful!';
        }
        return 'Invalid username or password.';
    }

    public getUserDetails(username: string): string | undefined {
        const user = this.users.find(user => user.getUsername() === username);
        if (user) {
            return `Username: ${user.getUsername()}, Email: ${user.getEmail()}`;
        }
        return 'User not found.';
    }
}
