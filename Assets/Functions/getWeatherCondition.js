export default (getWeatherType = value => {
  value = value - 1
  let weatherCondition = null
  switch (value) {
    case 0:
      weatherCondition = 'Klar himmel'
      break

    case 1:
      weatherCondition = 'Halvklar himmel'
      break

    case 2:
      weatherCondition = 'Varierande molnighet'
      break

    case 3:
      weatherCondition = 'Halvklar himmel'
      break

    case 4:
      weatherCondition = 'Molnig himmel'
      break

    case 5:
      weatherCondition = 'Mulet'
      break

    case 6:
      weatherCondition = 'Dimma'
      break

    case 7:
      weatherCondition = 'Lätta regnskurar'
      break

    case 8:
      weatherCondition = 'Måttliga regnskurar'
      break

    case 9:
      weatherCondition = 'Kraftiga regnskurar'
      break

    case 10:
      weatherCondition = 'Åska'
      break

    case 11:
      weatherCondition = 'Lätta skurar snöblandat regn'
      break

    case 12:
      weatherCondition = 'Måttliga skurar snöblandat regn'
      break

    case 13:
      weatherCondition = 'Kraftiga skurar snöblandat regn'
      break

    case 14:
      weatherCondition = 'Lätta snöbyar'
      break

    case 15:
      weatherCondition = 'Måttliga snöbyar'
      break

    case 16:
      weatherCondition = 'Kraftiga snöbyar'
      break

    case 17:
      weatherCondition = 'Lätt regn'
      break

    case 18:
      weatherCondition = 'Måttligt regn'
      break

    case 19:
      weatherCondition = 'Kraftigt regn'
      break

    case 20:
      weatherCondition = 'Åska'
      break

    case 21:
      weatherCondition = 'Lätt snöblandat regn'
      break

    case 22:
      weatherCondition = 'Måttligt snöblandat regn'
      break

    case 23:
      weatherCondition = 'Kraftigt snöblandat regn'
      break

    case 24:
      weatherCondition = 'Lätt snöfall'
      break

    case 25:
      weatherCondition = 'Måttligt snöfall'
      break

    case 26:
      weatherCondition = 'Kraftigt snöfall'
      break

    default:
      weatherCondition = 'Ingen data tillgänglig'
      break
  }
  return weatherCondition
})
