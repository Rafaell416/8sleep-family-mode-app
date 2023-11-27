import { useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { ThemeProvider } from './src/theme/ThemeProvider'
import Box from '@components/Box'
import FamilyMode from '@components/FamilyMode'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    'AktivGrotesk-Black': require('./assets/fonts/AktivGrotesk-Black.otf'),
    'AktivGrotesk-BlackItalic': require('./assets/fonts/AktivGrotesk-BlackItalic.otf'),
    'AktivGrotesk-Bold': require('./assets/fonts/AktivGrotesk-Bold.otf'),
    'AktivGrotesk-BoldItalic': require('./assets/fonts/AktivGrotesk-BoldItalic.otf'),
    'AktivGrotesk-Hairline': require('./assets/fonts/AktivGrotesk-Hairline.otf'),
    'AktivGrotesk-HairlineItalic': require('./assets/fonts/AktivGrotesk-HairlineItalic.otf'),
    'AktivGrotesk-Italic': require('./assets/fonts/AktivGrotesk-Italic.otf'),
    'AktivGrotesk-Light': require('./assets/fonts/AktivGrotesk-Light.otf'),
    'AktivGrotesk-LightItalic': require('./assets/fonts/AktivGrotesk-LightItalic.otf'),
    'AktivGrotesk-Medium': require('./assets/fonts/AktivGrotesk-Medium.otf'),
    'AktivGrotesk-MediumItalic': require('./assets/fonts/AktivGrotesk-MediumItalic.otf'),
    'AktivGrotesk-Regular': require('./assets/fonts/AktivGrotesk-Regular.otf'),
    'AktivGrotesk-Thin': require('./assets/fonts/AktivGrotesk-Thin.otf'),
    'AktivGrotesk-ThinItalic': require('./assets/fonts/AktivGrotesk-ThinItalic.otf'),
    'AktivGrotesk-XBold': require('./assets/fonts/AktivGrotesk-XBold.otf'),
    'AktivGrotesk-XBoldItalic': require('./assets/fonts/AktivGrotesk-XBoldItalic.otf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider>
      <Box onLayout={onLayoutRootView} flex={1} backgroundColor={'background'}>
        <FamilyMode />
      </Box>
    </ThemeProvider>
  )
}
