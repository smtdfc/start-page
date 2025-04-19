import {} from './components/MainScreen.js';


window.addEventListener('resize', () => {
  const nav = document.querySelector('#main-action-bar');
  if (window.innerHeight < 500) {
    nav.classList.add("hidden")
  } else {
    nav.classList.remove("hidden")
  }
});

