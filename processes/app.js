import { Process } from "../apis/process.js";
import {AppSettings} from '../apis/settings.js';


export class AppManagerProcess extends Process {
  constructor() {
    super("AURORA_DESK.PROCESS.APP_MANAGER", "AURORA_DESK.APP.SYSTEM");
  }
  
  onStart(){
    let list = AppSettings.getListApp()
    
  }
  

}