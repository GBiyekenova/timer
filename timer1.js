let myArgs = process.argv.slice(2);
myArgs = myArgs.map(Number);
let alarms = myArgs.map(arg => arg * 1000);
const beep = () => process.stdout.write('\x07');
const alarmClock = (delay) => {
  if (!isNaN(delay) && delay >= 0) {
    setTimeout(beep, delay);
  }
};
for (let alarm of alarms) {
  alarmClock(alarm);
}