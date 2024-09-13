function openResume() {
  // Replace 'your-resume-link' with your actual Google Drive PDF link
  window.open('https://drive.google.com/file/d/1JcR72RClh1O3Y4h6waLr44oN_HPp-Z6p/view?usp=sharing', '_blank');
}

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  menuToggle.addEventListener('click', function () {
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      menu.style.display = 'block';
    } else {
      menu.classList.add('hidden');
      menu.style.display = 'none';
    }
  });

  themeToggle.addEventListener('click', function () {
    body.classList.toggle('dark-theme');
  });
});
