// particleJS

import particlesJS from 'particles.js/particles';
const particles = window.particlesJS;
import particlesConfig from './particlesjs-config.json';
particles('bg', particlesConfig);



const icons = document.getElementsByClassName("devicon");


[...icons].forEach(element => {

  element.addEventListener("mouseover", (event) => {
    event.target.classList.add('colored')
  });
  element.addEventListener("mouseleave", (event) => {
    event.target.classList.remove('colored')
  });
});






