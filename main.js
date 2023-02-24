// Change menu to responsive
function topnav_resp() {
    var x = document.getElementById("myMenu");
    if (x.className === "menu" ) {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
    animated_icon(bar);
}

function animated_icon(x) {
    x.classList.toggle("change");
}

// Next/previous controlls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
                  
function currentSlide(n) {
    showSlides(slideIndex = n);
}
                    
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("top_games");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

// Randomize a hexcode and set background to it
function random_hex () {
    var hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    var hexcode1 = "";
    var hexcode2 = "";
    var random_index = 0;

    for(let i = 0 ; i < 6 ; i++) {
        random_index = Math.floor(Math.random() * hex_numbers.length);
        hexcode1 += hex_numbers[random_index];
        random_index = Math.floor(Math.random() * hex_numbers.length);
        hexcode2 += hex_numbers[random_index];
    }

    hexcode1 = "#"+hexcode1;
    hexcode2 = "#"+hexcode2;
    
    document.getElementById("change").style.backgroundColor = hexcode1; 
    document.getElementsByTagName("header").style.backgroundColor = hexcode2; 
};