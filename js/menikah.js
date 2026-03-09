// Get that hamburger menu cookin' //

document.addEventListener("DOMContentLoaded", function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener("click", function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

// Preloader

// Ensure envelope starts closed
document.addEventListener("DOMContentLoaded", function () {
  const flapButton = document.getElementById("flap-button");
  const flap = document.querySelector(".flap");
  const card = document.querySelector(".card");
  const preloader = document.querySelector(".preloader-wrapper");

  flapButton.addEventListener("click", () => {
    setTimeout(() => {
      preloader.classList.add("hidden");
    }, 2000);

    // Step 1: Rotate the flap
    flap.style.transform = "rotateX(180deg)";

    // Step 2: Move the card up after the flap animation completes
    setTimeout(() => {
      flap.style.zIndex = "99999991"; // Bring the card to the front
      card.style.transform = "translateY(-100px)";
    }, 500); // Delay matches the flap's transition duration


  });
});

// Wait for full page load
$(window).on("load", function () {
  // Preloader ready
});

function checkPreloader() {
  // Preloader will fade out on click now
}