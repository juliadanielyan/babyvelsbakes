window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// Small devices (landscape phones, 576px and up)
@media (min-width: 576px)

// Medium devices (tablets, 768px and up)
@media (min-width: 768px)

// Large devices (desktops, 992px and up)
@media (min-width: 992px)

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px)

@include media-breakpoint-up(sm) 
@include media-breakpoint-up(md)
@include media-breakpoint-up(lg)
@include media-breakpoint-up(xl)

// Example: Hide starting at `min-width: 0`, and then show at the `sm` breakpoint
.custom-class {
  display: none;
}
@include media-breakpoint-up(sm) {
  .custom-class {
    display: block;
  }
}
