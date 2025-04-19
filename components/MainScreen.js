import { AppSettings } from '../apis/settings.js';
import { EventEmitter } from '../helpers/event.js';
import {} from './ActionBar.js';

export class MainScreen extends HTMLElement {
  constructor() {
    super();
    this._onAppChange = this._onAppChange.bind(this);
  }
  
  connectedCallback() {
    this.render();
    
    EventEmitter.on("app-pinned", this._onAppChange);
    EventEmitter.on("app-unpinned", this._onAppChange);
  }
  
  disconnectedCallback() {
    EventEmitter.off("app-pinned", this._onAppChange);
    EventEmitter.off("app-unpinned", this._onAppChange);
  }
  
  _onAppChange() {
    this.updatePinnedList();
  }
  
  render() {
    this.innerHTML = `
      <action-bar></action-bar>
      <div id="main-contents">
        <div class="container">
          <div class="content-box">
            <div class="search-box">
              <input type="text" placeholder="Enter Address or URL" class="search-input" inputmode="text">
              <button class="btn-icon material-icons">search</button>
            </div>

            <div class="content-box">
              <div class="menu-icon-box">
                <ul class="list-app" id="pinned-app-list">
                  <!-- pinned apps render here -->
                </ul>
              </div>
            </div>
          </div>
        </div>
        <img class="main-background" src="./assets/images/bg_2.jpg" />
      </div>
    `;
    this.updatePinnedList();
  }
  
  updatePinnedList() {
    const pinnedApps = AppSettings.getPinnedApps();
    const pinnedList = this.querySelector("#pinned-app-list");
    
    pinnedList.innerHTML = pinnedApps.length > 0 ?
      pinnedApps.map(app => `
          <li>
            <img src="${app.icon || './assets/images/default-icon.png'}" />
            <span>${app.name}</span>
          </li>
        `).join("") :
      `<li><span>No pinned apps</span></li>`;
  }
}

window.customElements.define("main-screen", MainScreen);