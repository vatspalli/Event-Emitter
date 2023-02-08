import { Emitter } from "./exports/Emitter.mjs";
import { Subscription } from "./exports/Subscription.mjs";

const emitter = new Emitter();

const logHello = () => {
  console.log("Hello");
};

const logHelloDup = () => {
  console.log("Hello Again");
};

const logText = () => {
  console.log("Text");
};

const sub1 = emitter.subscribe("logHello", logHello);
const sub2 = emitter.subscribe("logHello", logHelloDup);
const sub3 = emitter.subscribe("logText", logText);

emitter.emit("logHello");
emitter.emit("logText");

sub1.release();

emitter.emit("logHello");
