const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");


const pass = document.getElementById("sign-pass");
const conPass = document.getElementById("sgin-con-pass")
const form = document.getElementById("sgin-form");
const error = document.getElementById("error")



// js show/hide password and change icon


pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type == "password") {
                pwField.type = "text";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })


            } else {
                pwField.type = "password";
                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })

            }
        })
    })

});



//sign up and login form + change title


signUp.addEventListener("click", () => {
    container.classList.add("active");
    document.title = "Signup";

});
login.addEventListener("click", () => {
    container.classList.remove("active");
    document.title = "Login";
});




//Password Validation
let message = [];




form.addEventListener("submit", (e) => {

    if (pass.value.length < 8) {
        message.push("Password must be longer than 8 characters.");
    }
    if (pass.value == 'password') {
        message.push("Password cannot be password.")
    }

    if (pass.value.search(/[a-z]/) == -1) {
        message.push("Password must contain a smail character.");
    }
    if (pass.value.search(/[A-Z]/) == -1) {
        message.push("Password must contain a capital character.");
    }
    if (pass.value.search(/[0-9]/) == -1) {
        message.push("Password must contain a number.");
    }
    if (pass.value.search(/[!\@\#\$\%\^\&\*\(\)\-\_\=\+\\\/.\,\;\'\"\[\]{\}]/) == -1) {
        message.push("Password must contain a special character.");
    }
    if (pass != conPass) {
        message.push("Password does not match")
    }




    if (message.length > 0) {
        e.preventDefault();
        error.innerText = message.join(', ');

    }


})