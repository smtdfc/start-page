export class SettingValue {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
  
  set(value) {
    this.value = value;
    localStorage.setItem(`K_${this.name}`, this.value);
  }
  
  get() {
    this.value = localStorage.getItem(`K_${this.name}`);
    return this.value;
  }
}