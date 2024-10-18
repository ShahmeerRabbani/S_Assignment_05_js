function handleSubmit(event){
    event.preventDefault();


const fullName = document.getElementById("fullName").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("num").value;
const dateOfBirth = document.getElementById("date").value;
// const male = document.getElementById("male").value;
// const female = document.getElementById("female").value;
const address = document.getElementById("address").value;
const city = document.getElementById("city").value;
const age = document.getElementById("age").value;
const password = document.getElementById("pass").value;
const confirmPassword = document.getElementById("confPass").value;


if (!fullName || !email || !phone || !dateOfBirth || !address || !city || !age || !password || !confirmPassword) {
    alert("All fields are required!");
    return;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
}

if(password.length <= 6){
    alert("Password must be at least 7 characters long.");
    return;
}

if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
}

if (age < 0 || age > 70) {
    alert("Please enter a valid age between 0 and 100.");
    return;
}

alert("Form submitted successfully!");
 
}