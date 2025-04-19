window.AURORA_DESK_PROCESS = {};

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
  AURORA_DESK_PROCESS[pid] = pro;
  pro.onStart();
  return pro;
}

export function endProcess(pid) {
  
  if (!AURORA_DESK_PROCESS[pid]) {
    throw Error("Cannot find process !");
  }
  
  AURORA_DESK_PROCESS[pid].onClose();
  delete AURORA_DESK_PROCESS[pid];
}