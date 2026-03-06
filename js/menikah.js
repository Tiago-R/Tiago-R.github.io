// Get that hamburger menu cookin' //

document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
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
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function() {
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
var preloaderDismissed = false;

// Ensure envelope starts closed
document.addEventListener("DOMContentLoaded", function () {
  var flap = document.getElementById("flap");
  if (flap) {
    flap.checked = false;
  }

  // Bind click event to preloader wrapper
  var preloaderWrapper = document.querySelector(".preloader-wrapper");
  if (preloaderWrapper) {
    preloaderWrapper.addEventListener("click", function handlePreloaderClick() {
      if (!preloaderDismissed) {
        preloaderDismissed = true;
        // Trigger the checkbox to open the envelope
        var flap = document.getElementById("flap");
        if (flap) {
          flap.checked = true;
        }
        // Fade out preloader after animation completes
        setTimeout(function () {
          $(".preloader-wrapper").fadeOut(500, function () {
            $("body").removeClass("preloader-site");
          });
        }, 600);
      }
      preloaderWrapper.removeEventListener("click", handlePreloaderClick);
    });
  }
});

// Wait for full page load
$(window).on("load", function () {
  // Preloader ready
});

function checkPreloader() {
  // Preloader will fade out on click now
}