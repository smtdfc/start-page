import { Process } from "../apis/process.js";
import { TimeFormatter } from "../helpers/time.js";

export class TimeProcess extends Process {
  constructor() {
    super("AURORA_DESK.PROCESS.TIME", "AURORA_DESK.APP.SYSTEM");
  }
  
  onStart() {
    this.timer = setInterval(() => {
      const now = new Date();
      
      const timeStr = TimeFormatter.formatTime(now);
      const dateStr = TimeFormatter.formatDate(now);
      
      document.getElementById("main-time-display").textContent = timeStr;
      document.getElementById("main-date-display").textContent = dateStr;
    }, 1000);
  }
  
  onClose() {
    clearInterval(this.timer);
  }
}