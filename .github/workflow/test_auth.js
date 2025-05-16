const { signup, login } = require('./auth.js');

let users = {};

// اختبار تسجيل مستخدم جديد
console.log(signup(users, "Atheer", "test@email.com", "1234", "0500000000")); // متوقع: Sign up successful! You can now log in.
// محاولة تسجيل بنفس الإيميل
console.log(signup(users, "Atheer", "test@email.com", "1234", "0500000000")); // متوقع: Email already exists.

// تسجيل دخول صحيح
console.log(login(users, "test@email.com", "1234")); // متوقع: Login successful!
// تسجيل دخول بكلمة مرور خاطئة
console.log(login(users, "test@email.com", "xxxx")); // متوقع: Invalid email or password.
// تسجيل دخول بإيميل غير موجود
console.log(login(users, "notfound@email.com", "1234")); // متوقع: Invalid email or password.
