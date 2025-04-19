import {createElementRef} from '../ui/ref.js';

export class ActionBar extends HTMLElement {
  constructor() {
    super()
    this.timeDisplayElement = createElementRef();
  }
  
  connectedCallback() {
    this.innerHTML = `
      <div class="nav" id="main-action-bar">
        <div class="nav-items">
          <button class="btn-icon material-icons">home</button>
          <button class="btn-icon material-icons">history</button>
          <button class="btn-icon material-icons">bookmark</button>
        </div>
        <span class="time-display">
          <span id="main-time-display" class="hour-display">10:30</span>
          <span id="main-date-display"  class="date-display">Wes, 14th 02 2025</span>
        </span>
      </div>
    `
  }
}

window.customElements.define("action-bar", ActionBar);