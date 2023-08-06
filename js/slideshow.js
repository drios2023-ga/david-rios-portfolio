let slideIndex = 1;

//This starts the slide show
//on the first slide using
//slideIndex above 
showSlides(slideIndex);

// Called when next or previous 
//button gets pressed
//calls showSlides below and
//passes in slideIndex plus
//whatever value it received,
// plus or minus one
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
//when user clicks a slide,
//calls showSlides and sets
// the global variable
//slideIndex to current index
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  //fetches required objects
  let slides = document.getElementsByClassName("sumo-slides");
  let dots = document.getElementsByClassName("dot");

  //if n is 4, then resets to 1 (first slide)
  //previous next buttons can cause 
  //this condition 
  if (n > slides.length) {slideIndex = 1}


  //if n is -1, then resets to 3 (or last slide)
  //previous next buttons can cause 
  //this condition 
  if (n < 1) {slideIndex = slides.length}

  //hides all slides to start
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  //resets the dots' class name that have active 
  //to a zero-length string~
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  //changes the slide to show the appropriate slide
  slides[slideIndex-1].style.display = "block";

  //changes the dot to be active
  dots[slideIndex-1].className += " active";

}