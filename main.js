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
               
// display correct slide
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("top_games");
    let dots = document.getElementsByClassName("demo");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
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

// display description on hover
function mOver1(obj) {
  obj.innerHTML = "Love Letter är ett enkelt kortbaserat spel om kärleksintriger där varje spelare skall försöka leverera ett kärleksbrev till en prinsessa."
}

function mOut1(obj) {
  obj.innerHTML = "1. Love Letter"
}

function mOver2(obj) {
  obj.innerHTML = "Bang! är en vilda western duell i kortspelsformat."
}

function mOut2(obj) {
  obj.innerHTML = "2. Bang!"
}

// smooth scroll between header and footer
$(document).ready(function(){
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(document).ready(function(){
  $("#flip1").click(function(){
    $("#panel1").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#flip2").click(function(){
    $("#panel2").slideToggle("slow");
  });
});

// draggable objects in footer
$(document).ready(function() {
  $(document.getElementsByClassName("draggable")).draggable({containment: ".footer"})
});