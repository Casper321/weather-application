export default (getDayHoursForecast = (daySearched, hoursForecast) => {
  const todayHours = []
  const date = new Date()
  const currentHour = date.getHours() + 1
  let month = date.getMonth() + 1
  let day = date.getDate() + daySearched
  
  let sumDate = ''

  if (parseInt(month) <= 9) {
    month = `0${month.toString()}`
  } else {
    month = month.toString()
  }

  if (parseInt(day) <= 9) {
    day = `0${day.toString()}`
  } else {
    day = day.toString()
  }

  sumDate = `${month}/${day}`
  
  hoursForecast.forEach(hour => {
    // If search is current day don't allow hours before current time
    if (daySearched === 0) {
      if (currentHour <= parseInt(hour.time)) {
        if (hour.date === sumDate) {
          todayHours.push({ ...hour })
        }
      }
    } else {
      if (hour.date === sumDate) {
        todayHours.push({ ...hour })
      }
    }
  })

  return todayHours
})

/*
  0 = today
  1 = tomorrow
  2 = in 2 days
  ...
  7 = in 7 days

  returns array of hours forecasts objects
*/
