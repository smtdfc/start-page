import {SettingValue} from './base.js';

export function getCurrentSetting(name){
  let setting= new SettingValue(name,null);
  setting.get();
  return setting;
}

