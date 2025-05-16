function checkLogin(email, password, users) {
    if (users[email] && users[email].password === password) {
        return "Login successful";
    } else {
        return "Invalid email or password";
    }
}

module.exports = { checkLogin };