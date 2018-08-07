import unformatDayHours from './unformatDayHours'

export default (getMonth = monthIndex => {
  if (typeof monthIndex === 'string') {
    if (monthIndex[0] === '0') {
      monthIndex = unformatDayHours(monthIndex)
    } else {
      monthIndex = parseInt(monthIndex)
    }
  }

  let month = null
  switch (monthIndex) {
    case 1:
      month = 'Januari'
      break

    case 2:
      month = 'Februari'
      break

    case 3:
      month = 'Mars'

      break

    case 4:
      month = 'April'

      break

    case 5:
      month = 'Maj'

      break

    case 6:
      month = 'Juni'

      break

    case 7:
      month = 'Juli'

      break

    case 8:
      month = 'Augusti'

      break

    case 9:
      month = 'September'

      break

    case 10:
      month = 'Oktober'

      break

    case 11:
      month = 'November'

      break

    case 12:
      month = 'December'

      break

    default:
      month = null
      break
  }

  return month
})
