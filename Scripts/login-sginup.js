const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");


const pass = document.getElementById("sign-pass");
const conPass = document.getElementById("sign-con-pass");
const form = document.getElementById("sgin-form");
const error = document.getElementById("error");

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
    var a = pass.value;
    var b = conPass.value;


    if (pass.value.length < 8) {
        message.push("Password must be longer than 8 characters.");
    } else {
        for (var i = 0; i < message.length; i++) {

            if (message[i] === "Password must be longer than 8 characters.") {

                message.splice(i, 1);
            }

        }
    }
    if (pass.value == 'password') {
        message.push("Password cannot be password.")
    } else {
        for (var i = 0; i < message.length; i++) {

            if (message[i] === "Password cannot be password.") {

                message.splice(i, 1);
            }

        }
    }

    if (pass.value.search(/[a-z]/) == -1) {
        message.push("Password must contain a smail character.");
    } else {
        for (var i = 0; i < message.length; i++) {

            if (message[i] === "Password must contain a smail character.") {

                message.splice(i, 1);
            }

        }
    }
    if (pass.value.search(/[A-Z]/) == -1) {
        message.push("Password must contain a capital character.");
    } else {
        for (var i = 0; i < message.length; i++) {

            if (message[i] === "Password must contain a capital character.") {

                message.splice(i, 1);
            }

        }
    }
    if (pass.value.search(/[0-9]/) == -1) {
        message.push("Password must contain a number.");
    } else {
        for (var i = 0; i < message.length; i++) {

            if (message[i] === "Password must contain a number.") {

                message.splice(i, 1);
            }

        }
    }
    if (pass.value.search(/[!\@\#\$\%\^\&\*\(\)\-\_\=\+\\\/.\,\;\'\"\[\]{\}]/) == -1) {
        message.push("Password must contain a special character.");
    } else {
        for (var i = 0; i < message.length; i++) {

            if (message[i] === "Password must contain a special character.") {

                message.splice(i, 1);
            }

        }
    }


    if (a != b) {
        message.push("Password does not match")
    } else {
        for (var i = 0; i < message.length; i++) {

            if (message[i] === "Password does not match") {

                message.splice(i, 1);
            }

        }
    }





    if (message.length > 0) {
        e.preventDefault();
        error.innerText = message.join(', ');

    }
    message.length = 0;

})

// login page

function tologin(e) {

    var username = document.getElementById("sign-usr").value;
    var pass = document.getElementById("sign-pass").value;


    localStorage.setItem("usr", username)
    localStorage.setItem("pass1", pass)

}


function loginf(e) {

    var username = document.getElementById("log-usr").value;
    var pass = document.getElementById("log-pass").value;
    var m = document.getElementById("log-error");


    var u = localStorage.getItem("usr")
    var p = localStorage.getItem("pass1")


    if (p == pass && u == username) {
        m.innerText = ""
        window.location.href = "../Pages/allimain.html";
    } else {
        m.innerText = "Username or password wrong"
        event.preventDefault()
    }



}
// poopy