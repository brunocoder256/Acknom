// Testimonial Slider
document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  let index = 0;

  setInterval(() => {
    testimonials[index].classList.remove("active");
    index = (index + 1) % testimonials.length;
    testimonials[index].classList.add("active");
  }, 4000);

  // Image fade-in on scroll
  const fadeElements = document.querySelectorAll('.product-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  fadeElements.forEach(el => observer.observe(el));
});
//ripples
  $(document).ready(function() {
  $('#hero').ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
    interactive: true,
  });
});
//footer
 // Fade in footer sections when they scroll into view
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll("footer section").forEach(section => {
    section.classList.add("opacity-0");
    observer.observe(section);
  });
});

// Lightbox functionality
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const closeBtn = document.getElementById("lightbox-close");
  const zoomInBtn = document.getElementById("zoom-in");
  const zoomOutBtn = document.getElementById("zoom-out");
  const resetBtn = document.getElementById("zoom-reset");

  let currentScale = 1;

  // Function to open lightbox
  function openLightbox(src) {
    lightboxImage.src = src;
    lightbox.style.display = "flex";
    currentScale = 1;
    lightboxImage.style.transform = `scale(${currentScale})`;
  }

  // Function to close lightbox
  function closeLightbox() {
    lightbox.style.display = "none";
  }

  // Add click event to all images
  document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", function () {
      openLightbox(this.src);
    });
  });

  // Close lightbox when clicking close button
  closeBtn.addEventListener("click", closeLightbox);

  // Close lightbox when clicking outside the image
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Zoom in
  zoomInBtn.addEventListener("click", function () {
    currentScale += 0.2;
    lightboxImage.style.transform = `scale(${currentScale})`;
  });

  // Zoom out
  zoomOutBtn.addEventListener("click", function () {
    if (currentScale > 0.2) {
      currentScale -= 0.2;
      lightboxImage.style.transform = `scale(${currentScale})`;
    }
  });

  // Reset zoom
  resetBtn.addEventListener("click", function () {
    currentScale = 1;
    lightboxImage.style.transform = `scale(${currentScale})`;
  });

  // Keyboard controls
  document.addEventListener("keydown", function (e) {
    if (lightbox.style.display === "flex") {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "+" || e.key === "=") {
        zoomInBtn.click();
      } else if (e.key === "-") {
        zoomOutBtn.click();
      } else if (e.key === "0") {
        resetBtn.click();
      }
    }
  });
});
