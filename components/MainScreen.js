import {} from './ActionBar.js';

export class MainScreen extends HTMLElement {
  constructor() {
    super()
  }
  
  connectedCallback() {
    this.innerHTML = `
      <action-bar></action-bar>
      <div id="main-contents">
        <div class="container">
          <div class="content-box ">
            <div class="search-box">
              <input type="text" placeholder="Enter Address or URL" class="search-input" inputmode="text">
              <button class="btn-icon material-icons">search</button>
            </div>
            
            <div class="content-box">
              <div class="menu-icon-box">
                <ul class="list-app">
                  <li>
                    <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png" alt="">
                    <span>Google</span>
                  </li>
                  <li>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="">
                    <span>Facebook</span>
                  </li>
                  <li>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="">
                    <span>Instagram</span>
                  </li>
                  <li>
                    <img src="https://img.icons8.com/ios7/600/FFFFFF/twitterx.png" alt="">
                    <span>X</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="content-box">
              <div class="todo-box">
                smsm
              </div>
            </div>
            
          </div>
          
        </div>
        <img class="main-background" src="/assets/images/bg_2.jpg" />
    `
  }
}

window.customElements.define("main-screen", MainScreen);