#! /usr/bin/env node
 class User {
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

const userManager = new UserManager();

// Signup new users
console.log(userManager.signup('john_doe', 'password123', 'john@example.com'));
console.log(userManager.signup('jane_doe', 'password456', 'jane@example.com'));
console.log(userManager.signup('john_doe', 'password789', 'johnny@example.com')); // Should return 'Username already taken.'

// Attempt to login
console.log(userManager.login('john_doe', 'password123')); // Should return 'Login successful!'
console.log(userManager.login('john_doe', 'wrongpassword')); // Should return 'Invalid username or password.'
console.log(userManager.login('non_existent_user', 'password123')); // Should return 'Invalid username or password.'

// Get user details
console.log(userManager.getUserDetails('john_doe')); // Should return 'Username: john_doe, Email: john@example.com'
console.log(userManager.getUserDetails('jane_doe')); // Should return 'Username: jane_doe, Email: jane@example.com'
console.log(userManager.getUserDetails('non_existent_user')); // Should return 'User not found.'
