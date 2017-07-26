import { Injectable } from '@angular/core';
import { Transport } from '../utility/service/transport';
import { Transport as DeviceTransport } from '../utility/device/transport';

@Injectable()
export class Items {
  items: any[] = [];
  transport: Transport = new Transport();
  connectionStatus: string = 'disconnected';
  device: {transport: DeviceTransport, connectionStatus: string} = {transport: null, connectionStatus: 'disconnected'};
  message: Array<{ deviceId: string, message: string, time: string, icon: string, image: string}> = [];
  icon = {alert: 'assets/images/alert.jpg', tick: 'assets/images/tick.jpg'};
  image = {doorOpened: 'assets/images/doorOpened.jpg', doorClosed: 'assets/images/doorClosed.png'};

  constructor() {}

  query(params?: any) {
    if (!params)
      return this.items;

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field === 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field === params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: any) {
    this.items.push(item);
  }

  delete(item: any) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
