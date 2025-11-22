// ----------- Show/Hide Password + Change Icon -----------
function togglePassword() {
    let pass = document.getElementById("password");
    let eye = document.querySelector(".eye-icon");

    if (pass.type === "password") {
        pass.type = "text";
        eye.textContent = "👁️"; // open eye
    } else {
        pass.type = "password";
        eye.textContent = "🙈"; // closed eye
    }
}

// ----------- Validate Password -----------
function validatePassword(pwd) {
    const hasLower = /[a-z]/.test(pwd);
    const hasUpper = /[A-Z]/.test(pwd);
    const hasDigit = /\d/.test(pwd);
    const minLength = pwd.length >= 6;

    return hasLower && hasUpper && hasDigit && minLength;
}

// ----------- On Form Submit -----------
function submitForm() {
    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value;
    let errorBox = document.getElementById("errorMsg");

    if (user === "") {
        errorBox.innerHTML = "❌ Username cannot be empty.";
        return;
    }

    if (!validatePassword(pass)) {
        errorBox.innerHTML =
            "❌ Password must contain: lowercase, uppercase, number, and at least 6 characters.";
        return;
    }

    // Hide form + Show Congratulations
    document.getElementById("loginCard").style.display = "none";
    document.getElementById("congratsCard").style.display = "block";

    // Display username only
    document.getElementById("congratsText").innerHTML =
        `🎉 Congratulations <b>${user}</b>! You have successfully logged in! 🎉`;
}

// ----------- Return to Home / Input Again -----------
function goHome() {
    // Show the login form again
    document.getElementById("loginCard").style.display = "block";
    document.getElementById("congratsCard").style.display = "none";

    // Clear all inputs
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("errorMsg").innerHTML = "";

    // Reset eye icon to closed state
    document.querySelector(".eye-icon").textContent = "🙈";

    // Reset password field to hidden
    document.getElementById("password").type = "password";
}
