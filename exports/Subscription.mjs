export class Subscription {
  event;
  cb;
  isActive;
  constructor(event, cb) {
    this.event = event;
    this.cb = cb;
    this.isActive = true;
  }

  release() {
    this.isActive = false;
  }

  resubscribe() {
    this.isActive = true;
  }
}
