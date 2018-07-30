export default (getDayHoursForecast = (daySearched, hoursForecast) => {
  const todayHours = []
  const date = new Date()
  const currentHour = date.getHours() + 1
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate() + daySearched
  let numDaysMonth = new Date(year, month, 0).getDate()

  if (day > numDaysMonth) {
    month = month + 1
    day = day - numDaysMonth
  }

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
<<<<<<< HEAD
  
=======

  console.log('sumdate:', sumDate)

>>>>>>> 7510122706db06e39fe6858c466aef589362c279
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
