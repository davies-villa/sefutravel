document.addEventListener('scroll', function () {
    const parallaxText = document.querySelector('.parallax-text');
    const offset = window.pageYOffset;
    parallaxText.style.transform = `translate(-50%, calc(-50% + ${offset * 0.5}px))`;
});


// Initialize Slick Carousel with custom settings
$(document).ready(function () {
    $('.carousel').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-arrow-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="bi bi-arrow-right"></i></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  
    // Hide arrows at the start and end of the carousel
    $('.carousel').on('afterChange', function (event, slick, currentSlide) {
      if (currentSlide === 0) {
        $('.slick-prev').hide();
      } else {
        $('.slick-prev').show();
      }
  
      if (currentSlide === slick.slideCount - slick.options.slidesToShow) {
        $('.slick-next').hide();
      } else {
        $('.slick-next').show();
      }
    });
  
    // Initial check to hide prev arrow if starting at the first slide
    if ($('.carousel').slick('slickCurrentSlide') === 0) {
      $('.slick-prev').hide();
    }
  });
  
  // Display Event Details and Auto-Switch Events
  document.addEventListener("DOMContentLoaded", function () {
    const gridItems = document.querySelectorAll(".grid-item");
    const eventsSection = document.querySelector(".events");
    let currentIndex = 0;
  
    function showEventDetails(index) {
      const eventData = JSON.parse(gridItems[index].getAttribute("data-event"));
      document.getElementById("event-name").innerText = eventData.name;
      document.getElementById("event-date").innerText = `Date: ${eventData.date}`;
      document.getElementById("event-location").innerText = `Location: ${eventData.location}`;
      document.getElementById("event-overview").innerText = eventData.overview;
  
      eventsSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${eventData.image})`;
  
      gridItems.forEach(item => item.classList.remove("selected"));
      gridItems[index].classList.add("selected");
    }
  
    // Add click event listeners to grid items
    gridItems.forEach((item, index) => {
      item.addEventListener("click", function () {
        showEventDetails(index);
        currentIndex = index;
      });
    });
  
    // Automatically switch events every 10 seconds
    setInterval(function () {
      currentIndex = (currentIndex + 1) % gridItems.length;
      showEventDetails(currentIndex);
    }, 10000);
  
    // Initialize with the first event
    showEventDetails(currentIndex);
  });
  