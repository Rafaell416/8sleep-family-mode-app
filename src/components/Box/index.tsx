import { ComponentProps } from 'react'
import { Theme } from '@theme/index'
import { createBox } from '@shopify/restyle'
import Animated from 'react-native-reanimated'

const Box = createBox<Theme>()
export const AnimatedBox = Animated.createAnimatedComponent(Box)

export type BoxProps = ComponentProps<typeof Box>
export default Box
