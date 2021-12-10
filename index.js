const moment = require('moment');
require('moment-precise-range-plugin');
const EventEmitter = require('events');
const proccesVar = process.argv.slice(2);

class MyEmitter extends EventEmitter {}

class Timer {
  constructor(date, index) {
    this.date = moment(date);
    this.index = index;
  }

  activate() {
    emitterObject.emit('start', this);
  }
}

class Factory {
  static createTimer(arrayOfDates) {
    return arrayOfDates.map((el, i) => new Timer(el, ++i));
  }
}

class Handler {
  static start(timer) {
    console.log(`Timer № ${timer.index} has started`);
    const interval = setInterval(() => {
      if (timer.date.isBefore()) {
        Handler.stop(timer);
        clearInterval(interval);
        return;
      }
      console.log(
        `Timer № ${timer.index}: ${moment(Date.now()).preciseDiff(timer.date)}`
      );
    }, 1000);
  }

  static stop(timer) {
    console.log(`Timer № ${timer.index} has finished`);
  }
}

const emitterObject = new MyEmitter();
const arrayOfTimers = Factory.createTimer(proccesVar);

emitterObject.on('start', Handler.start);

emitterObject.on('stop', Handler.stop);

arrayOfTimers.forEach((element) => {
  element.activate();
});
