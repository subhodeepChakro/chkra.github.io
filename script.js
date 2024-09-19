// Hero Section Transition to Navbar
window.onscroll = function() {
    const hero = document.getElementById('hero');
    const logo = document.getElementById('logo');
    const heroLogo = document.getElementById('hero-logo');
    if (window.scrollY > 50) {
      hero.classList.add('scrolled');
      logo.textContent = heroLogo.textContent;
    } else {
      hero.classList.remove('scrolled');
      logo.textContent = '';
    }
  };
  
  // Scroll to Projects Section on Button Click
  document.getElementById('scroll-button').addEventListener('click', function() {
    const projects = document.getElementById('projects');
    window.scrollTo({
      top: projects.offsetTop,
      behavior: 'smooth'
    });
  });
  
  // Smooth Scrolling Function
  function smoothScroll(target, duration) {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    let startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition - startPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    }
  
    requestAnimationFrame(animation);
  }
  
  document.getElementById('scroll-button').addEventListener('click', function() {
    smoothScroll(document.getElementById('projects'), 3000);
  });
  
  // Ripple Effect Background Change and Open Project
  function openProject(url, event) {
    const color = event.currentTarget.getAttribute('data-color');
    document.body.style.setProperty('--ripple-color', color);
    const ripple = document.createElement('span');
    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');
    event.currentTarget.appendChild(ripple);
    setTimeout(() => {
      window.location.href = url;
    }, 600);
  }
  