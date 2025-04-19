export function createElementRef(){
  return {
    name:`el_${Math.floor(Math.random()*Date.now()).toString(32)}`,
    target:function(){
      return document.querySelector(`#${this.name}`);
    }
  }
}