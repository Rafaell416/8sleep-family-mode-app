import { Theme } from '@theme/index'
import { useTheme as useThemeSR } from '@shopify/restyle'

export const useTheme = () => {
  return useThemeSR<Theme>()
}