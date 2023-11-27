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
  'x-32': normalize(32),
  'y-32': normalizeHeight(32),
}


const theme = createTheme({
  shadows,
  fonts: fontFamilies,
  colors,
  spacing,
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    defaults: {},
    bigtitle: {
      color: 'grayOne',
      fontSize: normalize(30),
      fontFamily: 'mulishSemiBold',
    },
    title: {
      color: 'grayOne',
      fontFamily: 'mulishSemiBold',
      fontSize: normalize(20),
    },
    bigsubtitle: {
      color: 'grayOne',
      fontFamily: 'mulishSemiBold',
      fontSize: normalize(15),
    },
    subtitle: {
      color: 'grayOne',
      fontFamily: 'mulishRegular',
      fontSize: normalize(14),
    },
    body: {
      color: 'grayFive',
      fontFamily: 'mulishRegular',
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

