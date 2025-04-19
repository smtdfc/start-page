export class EventEmitter {
  static events = {};
  
  static on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }
  
  static off(event, listener) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(l => l !== listener);
  }
  
  static emit(event, detail) {
    if (!this.events[event]) return;
    this.events[event].forEach(listener => listener(detail));
  }
}