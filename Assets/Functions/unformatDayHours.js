export default (unformatDayHours = value => {
  if (value[0] === '0') {
    value = value.slice(1, 2)
  }

  return parseInt(value)
})

/*
  09 => 9 int
  3 => 3 int
  23 => 23 int
*/
