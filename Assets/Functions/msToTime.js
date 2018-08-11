import formattingDayHours from "./formattingDayHours";

export default (msToTime = s => {
  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;

  if (s > 29) {
    mins += 1
    if (mins > 59) {
      hrs += 1
      mins = 0
      if (hrs === 24)
        hrs = 0
    }
  }

  if (hrs <= 9) {
    hrs = `0${hrs.toString()}`
  } else {
    hrs = hrs.toString()
  }

  if (mins <= 9) {
    mins = `0${mins.toString()}`
  } else {
    mins = mins.toString()
  }

  return hrs + ':' + mins;
  })