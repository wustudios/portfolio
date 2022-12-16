import { ThemeProvider as StyledThemeProvider } from 'styled-components'

export const colors = {
  brand: '#bdff00',
  error: '#ff4466',
  background: '#181818',
}

export const theme = {
  colors,
}

export function ThemeProvider({ children }) {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
}
