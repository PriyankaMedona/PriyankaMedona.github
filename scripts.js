// Wait for the page to load completely
document.addEventListener("DOMContentLoaded", function() {
  // Select the intro text elements
  const introText = document.querySelector('.intro-text');
  
  // Apply a class to trigger animation
  introText.classList.add('animate-intro-text');
});


function openResume() {
  // Replace 'your-resume-link' with your actual Google Drive PDF link
  window.open('https://drive.google.com/file/d/1le8VJ8UACmckNGQJZXiSwIo-brL41tVb/view?usp=sharing', '_blank');
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


