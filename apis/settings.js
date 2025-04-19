import { getCurrentSetting } from './utils.js';
import { EventEmitter } from '../helpers/event.js';

export class DisplaySettings {
  static backgroundImage = getCurrentSetting("AURORA_DESK.SETTINGS.DISPLAY.BG_IMAGE");
  static setBackground(imagePath) {
    
  }
}

export class AppSettings {
  static listApp = getCurrentSetting("AURORA_DESK.SETTINGS.APP.LIST");
  
  static getListApp() {
    if (!AppSettings.listApp.value) {
      AppSettings.resetList();
    }
    const list = JSON.parse(AppSettings.listApp.value);
    return list.installed;
  }
  
  static saveList(installed) {
    const data = { installed: installed };
    AppSettings.listApp.set(JSON.stringify(data));
  }
  
  static addApp(appId, name, url) {
    const installed = AppSettings.getListApp();
    const exists = installed.some(app => app.appID === appId);
    if (!exists) {
      const newApp = {
        appID: appId,
        name: name,
        url: url,
        pinned: false
      };
      installed.push(newApp);
      AppSettings.saveList(installed);
      EventEmitter.emit("app-installed", newApp);
    }
  }
  
  static removeApp(appId) {
    const app = AppSettings.getAppInfo(appId);
    if (!app) return;
    const installed = AppSettings.getListApp().filter(app => app.appID !== appId);
    AppSettings.saveList(installed);
    EventEmitter.emit("app-uninstalled", app);
  }
  
  static hasApp(appId) {
    return AppSettings.getListApp().some(app => app.appID === appId);
  }
  
  static getAppInfo(appId) {
    return AppSettings.getListApp().find(app => app.appID === appId) || null;
  }
  
  static pinApp(appId) {
    const installed = AppSettings.getListApp();
    const updated = installed.map(app => {
      if (app.appID === appId) {
        app.pinned = true;
        EventEmitter.emit("app-pinned", app);
      }
      return app;
    });
    AppSettings.saveList(updated);
  }
  
  static unpinApp(appId) {
    const installed = AppSettings.getListApp();
    const updated = installed.map(app => {
      if (app.appID === appId) {
        app.pinned = false;
        EventEmitter.emit("app-unpinned", app);
      }
      return app;
    });
    AppSettings.saveList(updated);
  }
  
  static getPinnedApps() {
    return AppSettings.getListApp().filter(app => app.pinned);
  }
  
  static resetList() {
    AppSettings.listApp.set(JSON.stringify({ installed: [] }));
    EventEmitter.emit("app-list-reset");
  }
}