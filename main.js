/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("drop").classList.toggle("show");

    var x = document.getElementById("drop");

    if (x.className === "dropdown-content" ) {
      x.className += " show";
    } else {
      x.className = "dropdown-content";
    }
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

// Change menu to responsive
function topnav_resp() {
    var x = document.getElementById("myMenu");

    if (x.className === "menu" ) {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }

    document.getElementsByClassName("bar").classList.toggle("change");
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
    var hexcode1 = "#";
    var hexcode2 = "#";
    var random_index = 0;

    for(let i = 0 ; i < 6 ; i++) {
        random_index = Math.floor(Math.random() * hex_numbers.length);
        hexcode1 += hex_numbers[random_index];
        random_index = Math.floor(Math.random() * hex_numbers.length);
        hexcode2 += hex_numbers[random_index];
    }

    document.getElementById("change").style.backgroundImage = 'linear-gradient(' + hexcode1 + ', ' + hexcode2 + ')';
    document.getElementsByClassName("header")[0].style.backgroundColor = hexcode1; 
    document.getElementsByClassName("footer")[0].style.backgroundColor = hexcode2; 
};