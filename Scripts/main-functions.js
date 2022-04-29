/*Navigation bar functionality, adds responsive class when clicking on a button*/
function navBarFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function updateUsername(id) {
    document.getElementById(id).innerHTML = localStorage.getItem("usr");
}

/*Headlines functionality*/
let slideIndex = 1;
let slideTimeOut = 0;

function setSlide(n, switchable) {
    showSlides(slideIndex = n); /*Sets the current slide index to n, then shows it*/
    if (switchable == 1) {
        slideTimeOut = setTimeout(switchSlide, 3000);
    }
    else {
        clearTimeout(slideTimeOut); /*Resets the timeout*/
        slideTimeOut = setTimeout(switchSlide, 3000);
    }
}

function switchSlide() {
    let slides = document.getElementsByClassName("headline__slide");
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1;} //Switch slides back to the first
    showSlides(slideIndex);
    slideTimeOut = setTimeout(switchSlide, 3000);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("headline__slide");
    let selector = document.getElementsByClassName("headline__selector");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < selector.length; i++) {
        selector[i].className = selector[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    selector[slideIndex-1].className += " active";
}