import { normalize, normalizeHeight } from '@utils/normalize'
import { createTheme } from '@shopify/restyle'
import colors from './colors'
import fontFamilies from './fontFamilies'

const shadows = {
  android: {
    elevation: 7,
  },
  ios: {
    shadowColor: colors.gray.thirteen,
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 2,
    shadowRadius: 6,
  },
}

const spacing = {
  none: 0,
  'x-2': normalize(2),
  'y-2': normalizeHeight(2),
  'x-4': normalize(4),
  'y-4': normalizeHeight(4),
  'x-6': normalize(6),
  'y-6': normalizeHeight(6),
  'x-8': normalize(8),
  'y-8': normalizeHeight(8),
  'x-10': normalize(10),
  'y-10': normalizeHeight(10),
  'x-16': normalize(16),
  'y-16': normalizeHeight(16),
  'x-20': normalize(20),
  'y-20': normalizeHeight(20),
  'x-22': normalize(22),
  'y-22': normalizeHeight(22),
  'x-24': normalize(24),
  'y-24': normalizeHeight(24),
  'x-32': normalize(32),
  'y-32': normalizeHeight(32),
}


const theme = createTheme({
  shadows,
  fonts: fontFamilies,
  colors: {
    background: colors.background,
    white: colors.white,
    warm: colors.warm,
    cold: colors.cold,
    blue: colors.blue,
    grayOne: colors.gray.one,
    grayTwo: colors.gray.two,
    transparent: 'transparent',
    darkBlueOne: colors.darkBlue.one,
    darkBlueTwo: colors.darkBlue.two,
    darkBlueThree: colors.darkBlue.three,
    darkBlueFour: colors.darkBlue.four,
  },
  spacing,
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    defaults: {},
    bigtitle: {
      color: 'white',
      fontSize: normalize(30),
      fontFamily: fontFamilies.AktivGroteskBold,
    },
    title: {
      color: 'white',
      fontFamily: fontFamilies.AktivGroteskBold,
      fontSize: normalize(20),
    },
    bigsubtitle: {
      color: 'white',
      fontFamily: fontFamilies.AktivGroteskBold,
      fontSize: normalize(15),
    },
    subtitle: {
      color: 'white',
      fontFamily: fontFamilies.AktivGroteskRegular,
      fontSize: normalize(14),
    },
    body: {
      color: 'white',
      fontFamily: fontFamilies.AktivGroteskRegular,
      fontSize: normalize(12),
    },
  },
  buttonVariants: {

  },
  cardStyles: {

  },
})

export type Theme = typeof theme
export default theme

