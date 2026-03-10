// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  
  // Loading animation
  const loader = document.createElement('div');
  loader.className = 'loader';
  loader.innerHTML = '<div class="loader-spinner"></div>';
  document.body.appendChild(loader);
  
  window.addEventListener('load', function() {
    setTimeout(function() {
      loader.classList.add('hidden');
    }, 500);
  });
  
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      navbar.classList.remove('scroll-up');
      return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
      navbar.classList.remove('scroll-up');
      navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
      navbar.classList.remove('scroll-down');
      navbar.classList