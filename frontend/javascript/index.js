import "$styles/index.css"
import "$styles/syntax-highlighting.css"
import "bridgetown-quick-search/dist"

// Import all JavaScript & CSS files from src/_components
import components from "$components/**/*.{js,jsx,js.rb,css}"

console.info("Bridgetown is loaded!")

const moon = document.querySelector('#moon');
const sun = document.querySelector('#sun');

sun.style.display = 'none';
moon.style.display = 'inline';

const darkModeOnOff = document.querySelector('#darkmode');

darkModeOnOff.addEventListener('click', ()=>{
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
