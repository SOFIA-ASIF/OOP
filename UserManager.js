import { User } from './User.js';
export class UserManager {
    users = [];
    signup(username, password, email) {
        if (this.users.find(user => user.getUsername() === username)) {
            return 'Username already taken.';
        }
        const newUser = new User(username, password, email);
        this.users.push(newUser);
        return 'Signup successful!';
    }
    login(username, password) {
        const user = this.users.find(user => user.getUsername() === username);
        if (user && user.validatePassword(password)) {
            return 'Login successful!';
        }
        return 'Invalid username or password.';
    }
    getUserDetails(username) {
        const user = this.users.find(user => user.getUsername() === username);
        if (user) {
            return `Username: ${user.getUsername()}, Email: ${user.getEmail()}`;
        }
        return 'User not found.';
    }
}
