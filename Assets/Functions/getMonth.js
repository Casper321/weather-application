export default (getMonth = monthIndex => {
  let month = null
  switch (monthIndex) {
    case 0:
      month = 'Januari'
      break

    case 1:
      month = 'Februari'
      break

    case 2:
      month = 'Mars'

      break

    case 3:
      month = 'April'

      break

    case 4:
      month = 'Maj'

      break

    case 5:
      month = 'Juni'

      break

    case 6:
      month = 'Juli'

      break

    case 7:
      month = 'Augusti'

      break

    case 8:
      month = 'September'

      break

    case 9:
      month = 'Oktober'

      break

    case 10:
      month = 'November'

      break

    case 11:
      month = 'December'

      break

    default:
      month = null
      console.log('Wrong month format passed to getMonth.js', monthIndex)
      break
  }

  return month
})
