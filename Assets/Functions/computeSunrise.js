import floor from './floor'
import msToTime from './msToTime'
import unformatDayHours from './unformatDayHours'

export default (computeSunrise = (
  longitude,
  latitude,
  day,
  month,
  year,
  sunrise
) => {
  /* Sunrise/Sunset Algorithm taken from
        http://williams.best.vwh.net/sunrise_sunset_algorithm.htm
        inputs:
            day = day of the year
            sunrise = true for sunrise, false for sunset
        output:
            time of sunrise/sunset in hours */
  day = unformatDayHours(day)
  month = unformatDayHours(month)
  var zenith = 90.6
  var D2R = Math.PI / 180
  var R2D = 180 / Math.PI

  // first calculate the day of the year

  let N1 = floor(275 * month / 9)
  let N2 = floor((month + 9) / 12)
  let N3 = 1 + floor((year - 4 * floor(year / 4) + 2) / 3)
  let N = N1 - N2 * N3 + day - 30

  // convert the longitude to hour value and calculate an approximate time
  var lnHour = longitude / 15
  var t
  if (sunrise) {
    t = N + (6 - lnHour) / 24
  } else {
    t = N + (18 - lnHour) / 24
  }

  // calculate the Sun's mean anomaly
  let M = 0.9856 * t - 3.289

  // calculate the Sun's true longitude
  let L =
    M + 1.916 * Math.sin(M * D2R) + 0.020 * Math.sin(2 * M * D2R) + 282.634
  if (L > 360) {
    L = L - 360
  } else if (L < 0) {
    L = L + 360
  }

  // calculate the Sun's right ascension
  let RA = R2D * Math.atan(0.91764 * Math.tan(L * D2R))
  if (RA > 360) {
    RA = RA - 360
  } else if (RA < 0) {
    RA = RA + 360
  }

  // right ascension value needs to be in the same qua
  let Lquadrant = Math.floor(L / 90) * 90
  let RAquadrant = Math.floor(RA / 90) * 90
  RA = RA + (Lquadrant - RAquadrant)

  // right ascension value needs to be converted into hours
  RA = RA / 15

  // calculate the Sun's declination
  let sinDec = 0.39782 * Math.sin(L * D2R)
  let cosDec = Math.cos(Math.asin(sinDec))

  // calculate the Sun's local hour angle
  let cosH =
    (Math.cos(zenith * D2R) - sinDec * Math.sin(latitude * D2R)) /
    (cosDec * Math.cos(latitude * D2R))
  var H
  if (sunrise) {
    H = 360 - R2D * Math.acos(cosH)
  } else {
    H = R2D * Math.acos(cosH)
  }
  H = H / 15

  // calculate local mean time of rising/setting
  let T = H + RA - 0.06571 * t - 6.622

  // adjust back to UTC
  let UT = T - lnHour
  if (UT > 24) {
    UT = UT - 24
  } else if (UT < 0) {
    UT = UT + 24
  }

  // convert UT value to local time zone of latitude/longitude
  let additionalHours
  switch (year) {
    case "2018":
      if (month > 10) additionalHours = 1
      else if (month > 9 && day > 27) additionalHours = 1
      else additionalHours = 2
      break
    case "2019":
      if (month > 2 && month < 11) {
        if (month === 10 && day > 26) additionalHours = 1
        else if (month === 3 && day < 31) additionalHours = 1
        else additionalHours = 2
      } else additionalHours = 1
      break
    case "2020":
      if (month > 2 && month < 11) {
        if (month === 10 && day > 24) additionalHours = 1
        else if (month === 3 && day < 29) additionalHours = 1
        else additionalHours = 2
      } else additionalHours = 1
      break
    case "2021":
      if (month > 2 && month < 11) {
        if (month === 10 && day > 30) additionalHours = 1
        else if (month === 3 && day < 28) additionalHours = 1
        else additionalHours = 2
      } else additionalHours = 1
      break
    case "2022":
      if (month > 2 && month < 11) {
        if (month === 10 && day > 29) additionalHours = 1
        else if (month === 3 && day < 27) additionalHours = 1
        else additionalHours = 2
      } else additionalHours = 1
      break
    case "2023":
      if (month > 2 && month < 11) {
        if (month === 10 && day > 28) additionalHours = 1
        else if (month === 3 && day < 26) additionalHours = 1
        else additionalHours = 2
      } else additionalHours = 1
      break
    case "2024":
      if (month > 2 && month < 11) {
        if (month === 10 && day > 26) additionalHours = 1
        else if (month === 3 && day < 31) additionalHours = 1
        else additionalHours = 2
      } else additionalHours = 1
      break
    case "2025":
      if (month > 2 && month < 11) {
        if (month === 10 && day > 25) additionalHours = 1
        else if (month === 3 && day < 30) additionalHours = 1
        else additionalHours = 2
      } else additionalHours = 1
      break
    case "2026":
      if (month > 2 && month < 11) {
        if (month === 10 && day > 24) additionalHours = 1
        else if (month === 3 && day < 29) additionalHours = 1
        else additionalHours = 2
      } else additionalHours = 1
      break
    case "2027":
      if (month > 2 && month < 11) {
        if (month === 10 && day > 30) additionalHours = 1
        else if (month === 3 && day < 28) additionalHours = 1
        else additionalHours = 2
      } else additionalHours = 1
      break
    case "2028":
      if (month > 2 && month < 11) {
        if (month === 10 && day > 28) additionalHours = 1
        else if (month === 3 && day < 26) additionalHours = 1
        else additionalHours = 2
      } else additionalHours = 1
      break
    case "2029":
      if (month > 2 && month < 11) {
        if (month === 10 && day > 27) additionalHours = 1
        else if (month === 3 && day < 25) additionalHours = 1
        else additionalHours = 2
      } else additionalHours = 1
      break
    case "2030":
      if (month > 2 && month < 11) {
        if (month === 10 && day > 26) additionalHours = 1
        else if (month === 3 && day < 31) additionalHours = 1
        else additionalHours = 2
      } else additionalHours = 1
      break
    case "2031":
      if (month > 2 && month < 11) {
        if (month === 10 && day > 25) additionalHours = 1
        else if (month === 3 && day < 30) additionalHours = 1
        else additionalHours = 2
      } else additionalHours = 1
      break
    case "2032":
      if (month > 2 && month < 11) {
        if (month === 10 && day > 30) additionalHours = 1
        else if (month === 3 && day < 28) additionalHours = 1
        else additionalHours = 2
      } else additionalHours = 1
      break
    default:
      additionalHours = 1
      break
  }
  let localT = UT + additionalHours

  // convert to Milliseconds
  localT = localT * 3600 * 1000
  return msToTime(localT)
})
