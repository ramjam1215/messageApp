import { message } from './message';

export class messages {
  mList: message[];

  constructor() {
    this.mList = [];
  }

  addMessage(m: message) {

    this.mList.push(m);
  }
}
