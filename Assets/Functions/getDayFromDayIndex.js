export default (getDayFromDayIndex = index => {
  let day = ''
  switch (index) {
    case 0:
      day = 'Söndag'
      break

    case 1:
      day = 'Måndag'
      break

    case 2:
      day = 'Tisdag'
      break

    case 3:
      day = 'Onsdag'
      break

    case 4:
      day = 'Torsdag'
      break

    case 5:
      day = 'Fredag'
      break

    case 6:
      day = 'Lördag'
      break

    default:
      day = 'Fel dagformat angett (ej mellan 0-6)'
      break
  }
  return day
})
