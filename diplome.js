 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();

          if (this.getAttribute('href') === '#') {
            // Scroll to the top of the page
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
            return;
          }

          const targetID = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetID);

          if (targetElement) {
            // Define different offsets for different sections
            let headerOffset = 150; // Default offset

            if (targetID === 'skills') {
              headerOffset = 290; // Adjust this value as needed for the skills section
            }

            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        });
 });
      
  document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const span = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.card-back a img').forEach(img => {
      img.onclick = function (event) {
        event.preventDefault();
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }
    });

    span.onclick = function () {
      modal.style.display = "none";
    }
     modal.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
  });

  document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');

  hamburger.addEventListener('click', function () {
    navbar.classList.toggle('active');
  });
});