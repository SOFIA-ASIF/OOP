import { UserManager } from './UserManager.js';
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
