export default (formattingDayHours = value => {
  value = parseInt(value)

  if (value <= 9) {
    value = `0${month.toString()}`
  } else {
    value = month.toString()
  }

  return value
})

/*
  9 => 09
  3 => 03
  23 => 23

  returns string
*/
