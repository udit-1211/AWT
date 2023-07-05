function validateForm(event) {
    event.preventDefault();

    const errorElements = document.getElementsByClassName('error');
    for (let i = 0; i < errorElements.length; i++) {
      errorElements[i].textContent = '';
    }

    const fullName = document.getElementById('fullName').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const state = document.getElementById('state').value.trim();
    const agreement = document.getElementById('agreement').checked;

    let isValid = true;

    if (!fullName) {
      document.getElementById('fullNameError').textContent = '* Full Name is required';
      isValid = false;
    }

    if (!username) {
      document.getElementById('usernameError').textContent = '* Username is required';
      isValid = false;
    } else if (!/^[A-Za-z0-9]+$/.test(username)) {
      document.getElementById('usernameError').textContent = '* Username must be alphanumeric';
      isValid = false;
    }

    if (!password) {
      document.getElementById('passwordError').textContent = '* Password is required';
      isValid = false;
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,10}$/.test(password)) {
      document.getElementById('passwordError').textContent = '* Password must be alphanumeric with 6 to 10 characters and contain at least one letter and one digit';
      isValid = false;
    }

    if (!confirmPassword) {
      document.getElementById('confirmPasswordError').textContent = '* Confirm Password is required';
      isValid = false;
    } else if (password !== confirmPassword) {
      document.getElementById('confirmPasswordError').textContent = '* Passwords do not match';
      isValid = false;
    }

    if (!gender) {
      document.getElementById('genderError').textContent = '* Gender is required';
      isValid = false;
    }

    if (!phone) {
      document.getElementById('phoneError').textContent = '* Phone No is required';
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(phone)) {
      document.getElementById('phoneError').textContent = '* Phone No must be a 10-digit number';
      isValid = false;
    }

    if (!email) {
      document.getElementById('emailError').textContent = '* Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById('emailError').textContent = '* Invalid email format';
      isValid = false;
    }

    if (!state) {
      document.getElementById('stateError').textContent = '* State is required';
      isValid = false;
    }

    if (!agreement) {
      document.getElementById('agreementError').textContent = '* You must agree to the terms and conditions';
      isValid = false;
    }

    if (isValid) {
      window.location.href = 'login.html';
    }
  }