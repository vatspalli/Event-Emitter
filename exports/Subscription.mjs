import { eventList } from "../index.js";

export class Subscription {
  id;
  event;
  cb;
  constructor(event, cb) {
    this.id = this.autoGenerateId();
    this.event = event;
    this.cb = cb;
  }

  release() {
    const idx = eventList[this.event].indexOf(this);
    if (idx > -1) {
      eventList[this.event].splice(idx, 1);
    }
  }

  autoGenerateId() {
    return Math.random().toString(36).slice(2);
  }
}
