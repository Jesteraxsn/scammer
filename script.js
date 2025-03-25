document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Reset previous error messages
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.textContent = '');
        
        // Validation flags
        let isValid = true;
        
        // First Name Validation
        const firstName = document.getElementById('firstName');
        if (firstName.value.trim() === '') {
            document.getElementById('firstNameError').textContent = 'First Name is required';
            isValid = false;
        }
        
        // Last Name Validation
        const lastName = document.getElementById('lastName');
        if (lastName.value.trim() === '') {
            document.getElementById('lastNameError').textContent = 'Last Name is required';
            isValid = false;
        }
        
        // Email Validation
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            document.getElementById('emailError').textContent = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            document.getElementById('emailError').textContent = 'Invalid email format';
            isValid = false;
        }
        
        // Date of Birth Validation
        const dob = document.getElementById('dob');
        if (dob.value === '') {
            document.getElementById('dobError').textContent = 'Date of Birth is required';
            isValid = false;
        }
        
        // Username Validation
        const username = document.getElementById('username');
        if (username.value.trim() === '') {
            document.getElementById('usernameError').textContent = 'Username is required';
            isValid = false;
        }
        
        // Password Validation
        const password = document.getElementById('password');
        if (password.value.trim() === '') {
            document.getElementById('passwordError').textContent = 'Password is required';
            isValid = false;
        } else if (password.value.length < 6) {
            document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long';
            isValid = false;
        }
        
        // Gender Validation
        const gender = document.querySelector('input[name="gender"]:checked');
        if (!gender) {
            document.getElementById('genderError').textContent = 'Please select a gender';
            isValid = false;
        }
        
        // Course Validation
        const course = document.getElementById('course');
        if (course.value === '') {
            document.getElementById('courseError').textContent = 'Please select a course';
            isValid = false;
        }
        
        // If all validations pass
        if (isValid) {
            alert('Registration Successful!');
            form.reset();
        }
    });
});
