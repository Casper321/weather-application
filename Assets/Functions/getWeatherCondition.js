export default (getWeatherType = value => {
  let weatherCondition = null
  switch (value) {
    case 1:
      weatherCondition = 'Klar himmel'
      break

    case 2:
      weatherCondition = 'Nästan klar himmel'
      break

    case 3:
      weatherCondition = 'Varierande molnighet'
      break

    case 4:
      weatherCondition = 'Halvklar himmel'
      break

    case 5:
      weatherCondition = 'Molnig himmel'
      break

    case 6:
      weatherCondition = 'Mulet'
      break

    case 7:
      weatherCondition = 'Dimma'
      break

    case 8:
      weatherCondition = 'Lätta regnskurar'
      break

    case 9:
      weatherCondition = 'Måttliga regnskurar'
      break

    case 10:
      weatherCondition = 'Kraftiga regnskurar'
      break

    case 11:
      weatherCondition = 'Åska'
      break

    case 12:
      weatherCondition = 'Lätta skurar snöblandat regn'
      break

    case 13:
      weatherCondition = 'Måttliga skurar snöblandat regn'
      break

    case 14:
      weatherCondition = 'Kraftiga skurar snöblandat regn'
      break

    case 15:
      weatherCondition = 'Lätta snöbyar'
      break

    case 16:
      weatherCondition = 'Måttliga snöbyar'
      break

    case 17:
      weatherCondition = 'Kraftiga snöbyar'
      break

    case 18:
      weatherCondition = 'Lätt regn'
      break

    case 19:
      weatherCondition = 'Måttligt regn'
      break

    case 20:
      weatherCondition = 'Kraftigt regn'
      break

    case 21:
      weatherCondition = 'Åska'
      break

    case 22:
      weatherCondition = 'Lätt snöblandat regn'
      break

    case 23:
      weatherCondition = 'Måttligt snöblandat regn'
      break

    case 24:
      weatherCondition = 'Kraftigt snöblandat regn'
      break

    case 25:
      weatherCondition = 'Lätt snöfall'
      break

    case 26:
      weatherCondition = 'Måttligt snöfall'
      break

    case 27:
      weatherCondition = 'Kraftigt snöfall'
      break

    default:
      weatherCondition = 'Ingen data tillgänglig'
      break
  }
  return weatherCondition
})
