import React, { FC, ReactNode } from 'react'
import { ThemeProvider as ThemeProviderSR } from '@shopify/restyle'
import theme from './index'

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => (
  <ThemeProviderSR theme={theme}>{children}</ThemeProviderSR>
)