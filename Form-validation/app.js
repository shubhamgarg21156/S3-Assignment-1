function validateForm() {
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const errorElement = document.getElementById("error");

    // Validate Name
    if (name === "") {
      errorElement.innerHTML = "Name is required";
      return false;
    }

    // Validate Password
    if (password === "") {
      errorElement.innerHTML = "Password is required";
      return false;
    }

    //Validate password length
    if(password.length < 6){
        errorElement.innerHTML = "Password should be of atleast 6 characters";
        return;
    }

    // Validate Confirm Password
    if (confirmPassword === "") {
      errorElement.innerHTML = "Confirm Password is required";
      return false;
    } else if (password !== confirmPassword) {
      errorElement.innerHTML = "Passwords do not match";
      return false;
    }

    // Validate Mobile Number
    if (!/^[0-9]{10}$/.test(mobile)) {
      errorElement.innerHTML = "Mobile Number should be 10 digits";
      return false;
    }

    // Validate Email
    if (!/\S+@\S+\.\S+/.test(email)) {
      errorElement.innerHTML = "Invalid Email address";
      return false;
    }

    // All validations passed, submit the form
    errorElement.innerHTML = "";
    alert("Form submitted successfully!");
    return true;
}

const form = document.getElementById('myForm');
form.onsubmit = validateForm;