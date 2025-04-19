window.K_PROCESSES = {};

export class Process {
  constructor(name, app = null) {
    this.name = name;
    this.app = app;
    this.pid = null;
  }
  
  onStart() {
    
  }
  
  onClose() {
    
  }
}

export function startProcess(process) {
  let pro = new process();
  let pid = Math.floor(Math.random() * 1234);
  pro.pid = pid;
  K_PROCESSES[pid] = pro;
  pro.onStart();
  return pro;
}

export function endProcess(pid) {
  
  if (!K_PROCESSES[pid]) {
    throw Error("Cannot find process !");
  }
  
  K_PROCESSES[pid].onClose();
  delete K_PROCESSES[pid];
}