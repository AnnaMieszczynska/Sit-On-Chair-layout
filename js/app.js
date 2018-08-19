// -------------Slider--------------

let slides = document.querySelectorAll(".slide");
let buttonLeft = document.querySelector(".button_left");
let buttonRight = document.querySelector(".button_right");
current = 0;

//clearing all slides

function reset() {
    for(let i=0; i<slides.length; i++) {
        slides[i].style.display="none";
    }
}

//start slider

function startSlide() {
    reset();
    slides[0].style.display="flex";
}

//show previous

function prevSlide() {
    reset();
    slides[current - 1].style.display="flex";
    current--;
}

//show next

function nextSlide() {
    reset();
    slides[current + 1].style.display="flex";
    current++;
}

//buttonLeft click event

buttonLeft.addEventListener("click", function() {
    if(current ===0) {
        current=slides.length;
    }
    prevSlide();
});

//buttonRight click event

buttonRight.addEventListener("click", function() {
    if(current===slides.length - 1) {
        current=-1;
    }
    nextSlide();
});

startSlide();


/* // -------------Articles----------------

let chairOneArticle = document.getElementById("#chair1");
let chairTwoArticle = document.getElementById("#chair2");
let chairArray = [chairOneArticle, chairTwoArticle];
let articlesHeader = document.querySelectorAll(".articles_header");

//mouseOver event

function mouseOver() {
    for (let i=0; i<chairArray.length; i++) {
        chairArray[i].addEventListener("mouseover", function() {
            articlesHeader.style.display="none";
        });
    }
}
mouseOver(); */

let chairOneArticle = document.getElementById("#chair1");
let chairTwoArticle = document.getElementById("#chair2");
let chairArray = [chairOneArticle, chairTwoArticle];
let articlesHeader = document.querySelectorAll(".articles_header")[0];

//mouseOver event

function mouseOver() {
    for (let i=0; i<chairArray.length; i++) {
        chairArray[i].addEventListener("mouseover", function() {
            articlesHeader.style.display="none";
        });
    }
}
mouseOver();
