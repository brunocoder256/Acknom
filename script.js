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
