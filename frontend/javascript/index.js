import "$styles/index.css"
import "$styles/syntax-highlighting.css"
import "bridgetown-quick-search/dist"

// Import all JavaScript & CSS files from src/_components
import components from "$components/**/*.{js,jsx,js.rb,css}"

console.info("Bridgetown is loaded!")

document.addEventListener('DOMContentLoaded', (event) => {
  const darkModeOnOff = document.querySelector('#darkmode');
  const sun = document.getElementById('sun');
  const moon = document.getElementById('moon');

  // Function to set the theme based on localStorage
  function setThemeFromLocalStorage() {
    const theme = localStorage.getItem('darkMode');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      sun.style.display = 'inline';
      moon.style.display = 'none';
    } else {
      document.documentElement.classList.remove('dark');
      sun.style.display = 'none';
      moon.style.display = 'inline';
    }
  }

  // Apply the theme on page load
  setThemeFromLocalStorage();

  // Toggle theme on button click
  darkModeOnOff.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
      localStorage.setItem('darkMode', 'dark');
      sun.style.display = 'inline';
      moon.style.display = 'none';
    } else {
      localStorage.setItem('darkMode', 'light');
      sun.style.display = 'none';
      moon.style.display = 'inline';
    }
  });
});

window.addEventListener('scroll', function() {
  var button = document.querySelector('.back-to-top');
  if (window.scrollY > 300) { // Cambia 300 a la posición a partir de la cual quieres mostrar el botón
    button.classList.add('show');
  } else {
    button.classList.remove('show');
  }
});
