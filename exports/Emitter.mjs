import { Subscription } from "./Subscription.mjs";

export class Emitter {
  eventList;
  constructor() {
    this.eventList = {};
  }

  subscribe(event, cb) {
    const sub = new Subscription(event, cb);
    if (this.eventList[event]) {
      this.eventList[event].push(sub);
    } else {
      this.eventList[event] = [];
      this.eventList[event].push(sub);
    }
    return sub;
  }

  emit(event) {
    if (this.eventList[event]) {
      this.eventList[event].forEach((sub) => {
        if (sub.isActive) {
          sub.cb();
        } else {
          console.log("Subscription was released");
        }
      });
    } else {
      console.log("Event does not exist");
    }
  }
}
