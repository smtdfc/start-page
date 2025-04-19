import {} from './components/MainScreen.js';
import {TimeProcess} from './processes/time.js';
import {AppManagerProcess} from './processes/app.js';

import {startProcess} from "./apis/process.js"


window.addEventListener('resize', () => {
  const nav = document.querySelector('#main-action-bar');
  if (window.innerHeight < 500) {
    nav.classList.add("hidden")
  } else {
    nav.classList.remove("hidden")
  }
});


function main(){
  startProcess(TimeProcess);
  startProcess(AppManagerProcess);
}

main()