import { ComponentProps } from 'react'
import { Theme } from '@theme/index'
import { createText } from '@shopify/restyle'

const Text = createText<Theme>()
export type TextProps = ComponentProps<typeof Text>
export default Text


