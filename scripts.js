
document.addEventListener("DOMContentLoaded", function() {
  const introText = document.querySelector('.intro-text');
  introText.classList.add('animate-intro-text');
});
function openResume() {
  window.open('https://drive.google.com/file/d/1fKemqHhz8YQsMpxmn4vNElSR3d88Nk1X/view?usp=sharing', '_blank');
}



document.addEventListener('scroll', function() {
    const skillsContainers = document.querySelectorAll('.skills-section div');
    skillsContainers.forEach(container => {
        const position = container.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            container.style.animation = 'fadeIn 1s ease forwards';
        }
    });
});


