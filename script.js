(function init() {
    "use strict";


    document.getElementById('instagramseite').addEventListener('click', function () {
        window.open('https://www.instagram.com/embellish_lounge/?hl=de', '_blank');
    });

    document.getElementById('instagramseite2').addEventListener('click', function () {
        window.open('https://www.instagram.com/embellish_lounge/?hl=de', '_blank');
    });

    //Tabelle Buttons mit schleife auf die gleiche seite
    var buttons = document.getElementsByClassName('table__button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            window.open('https://www.treatwell.de/ort/embellish-lounge/', '_blank');
        });
    }

    let images = [
        "./media/salon/wartezimmer.webp",
        "./media/salon/wartezimmer2.webp",
        "./media/salon/raum.webp",
        "./media/salon/raum2.webp",
        "./media/salon/header2.jpg"
    ];

    let currentImageIndex = 0;
    let image = document.getElementById("salon__img");

    function updateImage() {
        image.src = images[currentImageIndex];
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImage();
    }

    function previousImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImage();
    }

    updateImage();


    let prevBtn = document.getElementById("salon__previousBtn");
    let nextBtn = document.getElementById("salon__nextBtn");

    nextBtn.addEventListener("click", nextImage);
    prevBtn.addEventListener("click", previousImage);
})();

//hoch Scrollen
const button = document.getElementById("scrollToTopBthn");
let scrolled = false;
window.onscroll = function () {
    if (document.documentElement.scrollTop > 600) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
        // if (document.documentElement.scrollTop > 160 && !scrolled) {
        //     scrolled = true;
        //     window.scrollTo({
        //         top: 960,
        //         behavior: "smooth"
        //     });
        // }
    }
};

button.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


//ANIMATIONEN JS

//Animation beim scrollen wird es eingeblendet
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => {
    el.classList.remove('show'); // Setze den Anfangszustand auf unsichtbar
    observer.observe(el);
});


//Fade animation 
function animateOnScroll() {
    var elements = document.querySelectorAll('.fadee');
    var windowHeight = window.innerHeight;

    elements.forEach(function(element) {
        var elementPosition = element.getBoundingClientRect().top;

        if (elementPosition < windowHeight) {
            element.classList.add('showfade'); // Füge die Klasse "show" hinzu, wenn das Element sichtbar ist
        } else {
            element.classList.remove('showfade'); // Entferne die Klasse "show", wenn das Element außerhalb des sichtbaren Bereichs ist
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Ausführen der Funktion beim Laden der Seite






