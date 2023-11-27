import { ComponentProps } from 'react'
import { Theme } from '@theme/index'
import { createBox } from '@shopify/restyle'

const Box = createBox<Theme>()
export type BoxProps = ComponentProps<typeof Box>
export default Box
