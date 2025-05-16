function signup(users, username, email, password, phoneNumber) {
    if (users[email]) {
        return "Email already exists.";
    } else {
        users[email] = { username, email, password, phoneNumber };
        return "Sign up successful! You can now log in.";
    }
}

function login(users, email, password) {
    const user = users[email];
    if (user && user.password === password) {
        return "Login successful!";
    } else {
        return "Invalid email or password.";
    }
}

module.exports = { signup, login };
