const listApps = [
  {
    name: "Google",
    url: "https://www.google.com",
    icon: "https://www.google.com/favicon.ico",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com",
    icon: "https://www.youtube.com/favicon.ico",
  },
  {
    name: "GitHub",
    url: "https://www.github.com",
    icon: "https://www.github.com/favicon.ico",
  },
  {
    name: "Reddit",
    url: "https://www.reddit.com",
    icon: "https://www.reddit.com/favicon.ico",
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com",
    icon: "https://stackoverflow.com/favicon.ico",
  },
];

const defaultIcon = "./app-icon.png";
const modal = document.querySelector(".modal");
const openModalBtn = document.getElementById("add-app");
const closeModalBtn = modal.querySelector(".nav-btn-icon");
const marrkedAppsContainer = document.getElementById("marked-apps");
const addAppBtn = document.getElementById("add-app-btn");
const appNameInput = document.getElementById("app-name");
const appUrlInput = document.getElementById("app-url");

function updateDate() {
  const dateElement = document.getElementById("date");
  const now = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  dateElement.textContent = now.toLocaleDateString(undefined, options);
}

function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  timeElement.textContent = `${hours}:${minutes}`;
}

function renderMarkedApps() {
  marrkedAppsContainer.innerHTML = "";
  listApps.forEach((app) => {
    const appDiv = document.createElement("div");
    const appImg = document.createElement("img");
    appImg.src = app.icon ?? defaultIcon;
    appImg.onerror = () => {
      appImg.src = defaultIcon;
    };
    appImg.alt = app.name;
    const appSpan = document.createElement("span");
    appSpan.textContent = app.name;
    appDiv.appendChild(appImg);
    appDiv.appendChild(appSpan);
    appDiv.addEventListener("click", () => {
      window.open(app.url, "_blank");
    });
    marrkedAppsContainer.appendChild(appDiv);
  });
}

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

addAppBtn.addEventListener("click", () => {
  const appName = appNameInput.value.trim();
  const appUrl = appUrlInput.value.trim();
  if (appName && appUrl) {
    listApps.push({ name: appName, url: appUrl });
    appNameInput.value = "";
    appUrlInput.value = "";
    renderMarkedApps();
    modal.style.display = "none";
  } else {
    alert("Please enter both app name and URL.");
  }
});

// Update time every minute
setInterval(() => {
  updateTime();
  updateDate();
}, 60000);
updateDate();
updateTime();
renderMarkedApps();
