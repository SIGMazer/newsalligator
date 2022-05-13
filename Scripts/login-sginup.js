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




//Password Validation + regester localstoreg


let message = [];
var flag = 1;

function tologin(e) {

    var username = document.getElementById("sign-usr").value;
    var pass = document.getElementById("sign-pass").value;

    if (flag) {
        localStorage.setItem("usr", username)
        localStorage.setItem("pass1", pass)
    }

}


form.addEventListener("submit", (e) => {
    var a = pass.value;
    var b = conPass.value;


    if (pass.value.length < 9) {
        message.push("Password must be longer than 8 characters.");
    }
    if (pass.value == 'password') {
        message.push("Password cannot be password.")
    }

    if (pass.value.search(/[a-z]/) == -1) {
        message.push("Password must contain a small character.");
    }
    if (pass.value.search(/[A-Z]/) == -1) {
        message.push("Password must contain a capital character.");
    }
    if (pass.value.search(/[0-9]/) == -1) {
        message.push("Password must contain a number.");
    }
    if (pass.value.search(/[!\@\#\$\%\^\&\*\(\)\-\_\=\+\\\/.\,\;\'\"\[\]{\}\?\>\<\.\,\`\~]/) == -1) {
        message.push("Password must contain a special character.");
    }



    if (a != b) {
        message.push("Password does not match")
    }





    if (message.length > 0) {
        e.preventDefault();
        error.innerText = message.join(', ');
        flag = 0

    } else {
        flag = 1;
    }
    message.length = 0;

    tologin();

})

// login page





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