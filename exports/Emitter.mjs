import { Subscription } from "./Subscription.mjs";
import { eventList } from "../index.js";

export class Emitter {
  eventList;
  constructor() {
    this.eventList = {};
  }

  subscribe(event, cb) {
    const sub = new Subscription(event, cb);
    if (eventList[event]) {
      eventList[event].push(sub);
    } else {
      eventList[event] = [];
      eventList[event].push(sub);
    }
    return sub;
  }

  emit(event) {
    if (eventList[event]) {
      eventList[event].forEach((sub) => {
        console.log(`Subscription ID: ${sub.id}`);
        sub.cb();
      });
    } else {
      console.log("Event does not exist");
    }
  }
}
