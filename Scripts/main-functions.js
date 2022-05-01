/*Navigation bar functionality, adds responsive class when clicking on a button*/
function navBarFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/*Updates the username*/
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

/*Random article recommendation*/
const titleArray = ["Rogue Legacy 2 Review - Grand Lineage","BB the GREATEST","UEFA CHAMPIONS WINNER: CHELSEA in incredible season, FINALLY won UEFA champions league trophy 2021","Rafa Nadal places his 20th Grand Slam trophy in the Rafa Nadal Museum","Uranus should be NASA’s top planetary target, influential report finds","How ancient, recurring climate changes may have shaped human evolution","PS5 VRR Tests Show Massive FPS Gains in Certain Games like Spider-Man and Ratchet & Clank","Epic launches Unreal Engine 5","Elon Musk sells $8.5 billion worth of Tesla shares","Ukraine war: World Bank warns of 'human catastrophe' food crisis","Angelina Jolie visits residents at boarding school and medical institution in Ukraine","Can Sri Lanka dig itself out of a $50 billion debt?"];
const linkArray = ["../Pages/entertainment1.html","../Pages/entertainment2.html","../Pages/sport1.html","../Pages/sport2.html","../Pages/science1.html","../Pages/science2.html","../Pages/tech2.html","../Pages/tech1.html","../Pages/Economy1.html","../Pages/economy2.html","../Pages/World1.html","../Pages/World2.html"];

function articleRecommend(id) {
    let arrayLength = linkArray.length;
    let selectedIndex = Math.floor(Math.random() * arrayLength);
    document.getElementById(id).innerHTML = titleArray[selectedIndex];
    document.getElementById(id).href = linkArray[selectedIndex];
}