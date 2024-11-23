var typed = new Typed(".text", {
    strings: ["Web Developer", "Frontend Developer", "Freelance"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');

  hamburger.addEventListener('click', function () {
    navbar.classList.toggle('active');
  });
});
