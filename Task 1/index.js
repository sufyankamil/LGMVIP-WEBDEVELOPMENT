/* Smooth Scrolling Navbar */
window.onscroll = function() {scroll()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function scroll() {
  if (window.pageYOffset >= 550) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


/* Carousel in Landing Page*/
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }    
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


/* Carousel in Life in Zippy*/
var lifeimg = document.getElementsByClassName('lifeimg')
var len=lifeimg.length;

for (var i=0; i < len; i++){

  lifeimg[i].addEventListener('click', function(){
    document.getElementById('dispimg').src = this.src
  })
}

var slideLeft = document.getElementById('prev');
var slideRight = document.getElementById('next');

slideLeft.addEventListener('click', function(){
  document.getElementById('lifeimg-gallery').scrollLeft -= 150
})

slideRight.addEventListener('click', function(){
  document.getElementById('lifeimg-gallery').scrollLeft += 150
})

