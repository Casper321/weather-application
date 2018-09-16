import { StyleSheet, Platform } from 'react-native'

export const COL_GOOGLE_BLUE = '#2196f3'
export const COL_PRIMARY = '#000'
export const COL_SECONDARY = '#4885ed'
export const COL_GREY = '#f0f0f0' // ddd
export const COL_DARK_GREY = '#afafaf'
export const COL_WARNING = '#8A2BE2'
export const COL_YELLOW_SUN = '#FDB813'
export const COL_WATER_BLUE = '#40a4df'
export const COL_BLACK = '#000'
export const COL_WHITE = '#fff'
export const COL_CLOUDY = '#9b9b9b'
export const COL_NIGHT_RIDER = '#332e2e'

export const ICON_SIZE_XS = 16
export const ICON_SIZE_SMALL = 24
export const ICON_SIZE_MEDIUM = 32
export const ICON_SIZE_LARGE = 56

export const SPACING_XXS = 4
export const SPACING_XS = 6
export const SPACING_S = 12
export const SPACING_M = 18
export const SPACING_L = 26
export const SPACING_XL = 38

export const FONT_SIZE_XS = 12
export const FONT_SIZE_S = 17
export const FONT_SIZE_M = 20
export const FONT_SIZE_L = 26

export const WIDTH_STANDARD = '95%'

export const BORDER_RADIUS_STANDARD = 4

export const BORDER_WIDTH_STANDARD = 1

export const BOX_SHADOW_STANDARD = 8

export const FONT_FAMILY = 'Roboto'

export default StyleSheet.create({
  /* Font type */
  ff: { fontFamily: FONT_FAMILY },

  /* Color */
  col_primary: { color: COL_PRIMARY },
  col_secondary: { color: COL_SECONDARY },
  col_grey: { color: COL_GREY },
  col_dark_grey: { color: COL_DARK_GREY },
  col_warning: { color: COL_WARNING },
  col_yellow_sun: { color: COL_YELLOW_SUN },
  col_water_blue: { color: COL_WATER_BLUE },
  col_white: { color: COL_WHITE },
  col_black: { color: COL_BLACK },

  /* Background color */
  col_bg_primary: { backgroundColor: COL_PRIMARY },
  col_bg_secondary: { backgroundColor: COL_SECONDARY },
  col_bg_grey: { backgroundColor: '#c2e6fc' /* COL_GREY() */ } /* Caspers favo: c2e6fc */,
  col_bg_dark_grey: { backgroundColor: COL_DARK_GREY },
  col_bg_warning: { backgroundColor: COL_WARNING },
  col_bg_yellow_sun: { backgroundColor: COL_YELLOW_SUN },
  col_bg_water_blue: { backgroundColor: COL_WATER_BLUE },
  col_bg_white: { backgroundColor: COL_WHITE },
  col_bg_google_blue: { backgroundColor: COL_GOOGLE_BLUE },

  /* Margin */
  ma0: { margin: SPACING_XXS },
  ma1: { margin: SPACING_XS },
  ma2: { margin: SPACING_S },
  ma3: { margin: SPACING_M },
  ma4: { margin: SPACING_L },
  ma5: { margin: SPACING_XL },
  maA: { margin: 'auto' },

  mt0: { marginTop: SPACING_XXS },
  mt1: { marginTop: SPACING_XS },
  mt2: { marginTop: SPACING_S },
  mt3: { marginTop: SPACING_M },
  mt4: { marginTop: SPACING_L },
  mt5: { marginTop: SPACING_XL },
  mtA: { marginTop: 'auto' },

  mb0: { marginBottom: SPACING_XXS },
  mb1: { marginBottom: SPACING_XS },
  mb2: { marginBottom: SPACING_S },
  mb3: { marginBottom: SPACING_M },
  mb4: { marginBottom: SPACING_L },
  mb5: { marginBottom: SPACING_XL },
  mbA: { marginBottom: 'auto' },

  ml0: { marginLeft: SPACING_XXS },
  ml1: { marginLeft: SPACING_XS },
  ml2: { marginLeft: SPACING_S },
  ml3: { marginLeft: SPACING_M },
  ml4: { marginLeft: SPACING_L },
  ml5: { marginLeft: SPACING_XL },
  mlA: { marginLeft: 'auto' },

  mr0: { marginRight: SPACING_XXS },
  mr1: { marginRight: SPACING_XS },
  mr2: { marginRight: SPACING_S },
  mr3: { marginRight: SPACING_M },
  mr4: { marginRight: SPACING_L },
  mr5: { marginRight: SPACING_XL },
  mrA: { marginRight: 'auto' },

  /* Padding */
  pa0: { padding: SPACING_XXS },
  pa1: { padding: SPACING_XS },
  pa2: { padding: SPACING_S },
  pa3: { padding: SPACING_M },
  pa4: { padding: SPACING_L },
  pa5: { padding: SPACING_XL },
  paA: { padding: 'auto' },

  pt0: { paddingTop: SPACING_XXS },
  pt1: { paddingTop: SPACING_XS },
  pt2: { paddingTop: SPACING_S },
  pt3: { paddingTop: SPACING_M },
  pt4: { paddingTop: SPACING_L },
  pt5: { paddingTop: SPACING_XL },
  ptA: { paddingTop: 'auto' },

  pl0: { paddingLeft: SPACING_XXS },
  pl1: { paddingLeft: SPACING_XS },
  pl2: { paddingLeft: SPACING_S },
  pl3: { paddingLeft: SPACING_M },
  pl4: { paddingLeft: SPACING_L },
  pl5: { paddingLeft: SPACING_XL },
  plA: { paddingLeft: 'auto' },

  pr0: { paddingRight: SPACING_XXS },
  pr1: { paddingRight: SPACING_XS },
  pr2: { paddingRight: SPACING_S },
  pr3: { paddingRight: SPACING_M },
  pr4: { paddingRight: SPACING_L },
  pr5: { paddingRight: SPACING_XL },
  prA: { paddingRight: 'auto' },

  pb0: { paddingBottom: SPACING_XXS },
  pb1: { paddingBottom: SPACING_XS },
  pb2: { paddingBottom: SPACING_S },
  pb3: { paddingBottom: SPACING_M },
  pb4: { paddingBottom: SPACING_L },
  pb5: { paddingBottom: SPACING_XL },
  pbA: { paddingBottom: 'auto' },

  /* Font weight */
  fw0: { fontWeight: '300' },
  fw1: { fontWeight: '500' },
  fw2: { fontWeight: '700' },

  /* Font size */
  fz0: { fontSize: FONT_SIZE_XS },
  fz1: { fontSize: FONT_SIZE_S },
  fz2: { fontSize: FONT_SIZE_M },
  fz3: { fontSize: FONT_SIZE_L },

  /* Text align */
  tac: { textAlign: 'center' },
  tal: { textAlign: 'left' },
  tar: { textAlign: 'right' },

  /* Flex */
  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  flex4: { flex: 4 },
  flex5: { flex: 5 },
  flex7: { flex: 7 },
  flex8: { flex: 8 },
  flex9: { flex: 9 },
  flex10: { flex: 10 },

  flexDc: { flexDirection: 'column' },
  flexDr: { flexDirection: 'row' },

  flexJfs: { justifyContent: 'flex-start' },
  flexJfe: { justifyContent: 'flex-end' },
  flexJsa: { justifyContent: 'space-around' },
  flexJsb: { justifyContent: 'space-between' },
  flexJse: { justifyContent: 'space-evenly' },
  flexJce: { justifyContent: 'center' },

  flexAfs: { alignItems: 'flex-start' },
  flexAfe: { alignItems: 'flex-end' },
  flexAce: { alignItems: 'center' },
  flexAst: { alignItems: 'stretch' },

  flexWw: { flexWrap: 'wrap' },
  flexWn: { flexWrap: 'nowrap' },

  /* Width */
  w: { width: WIDTH_STANDARD },
  w50: { width: '50%' },
  w100: { width: '100%' },

  /* Border radius */
  br: { borderRadius: BORDER_RADIUS_STANDARD },
  btrr: { borderTopRightRadius: BORDER_RADIUS_STANDARD },
  btlr: { borderTopLeftRadius: BORDER_RADIUS_STANDARD },
  bblr: { borderBottomLeftRadius: BORDER_RADIUS_STANDARD },
  bbrr: { borderBottomRightRadius: BORDER_RADIUS_STANDARD },

  /* Border Width */
  bw: { borderWidth: BORDER_WIDTH_STANDARD },
  bbw: { borderBottomWidth: BORDER_WIDTH_STANDARD },
  btw: { borderTopWidth: BORDER_WIDTH_STANDARD },
  blw: { borderLeftWidth: BORDER_WIDTH_STANDARD },
  brw: { borderRightWidth: BORDER_WIDTH_STANDARD },

  /* Border Color */
  bc: { borderColor: COL_GREY },

  /* Border Bottom Color */
  bbcp: { borderBottomColor: COL_PRIMARY },

  /* Position */
  abs: { position: 'absolute' },

  /* Box shadow */
  boxSh: {
    elevation: BOX_SHADOW_STANDARD,
    shadowColor: Platform.OS === 'ios' ? '#000' : null,
    shadowOpacity: Platform.OS === 'ios' ? 0.1 : null,
    shadowOffset: Platform.OS === 'ios' ? { width: BOX_SHADOW_STANDARD, height: BOX_SHADOW_STANDARD } : null
  }
})
