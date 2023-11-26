import { useCallback } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

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
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={{ fontFamily: 'AktivGrotesk-Bold', fontSize: 30 }}>AktivGrotesk Bold</Text>
      <Text style={{ fontSize: 30 }}>Platform Default</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
