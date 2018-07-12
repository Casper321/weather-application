import getDayHoursForecast from './getDayHoursForecast'

export default (getForecastHour = (day, hour, hours) => {
  // Get hours from day requested
  const dayHours = getDayHoursForecast(day, hours)

  // Convert hour to valid hour format

  // Get the requested hour
  const hour = dayHours.find(hour => hour.time === hour)
})
