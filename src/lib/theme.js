import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles'

export const colors = {
  brand: '#bdff00',
  error: '#ff4466',
  background: '#181818',
  text: {
    primary: '#D7D7D7',
  },
}

const muiTheme = createTheme({
  typography: {
    fontFamily: ['IBM Plex Mono', 'arial', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: colors.brand,
    },
    text: {
      primary: '#FFFFFF',
    },
    error: {
      main: colors.error,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '1.125rem',
          lineHeight: '1.375rem',
          backgroundColor: 'rgba(58, 58, 58, 0.48)',
          borderRadius: '32px',
          '&:not(.Mui-error):hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.brand,
          },
          '&.Mui-focused': {
            color: colors.brand,
          },
        },
        input: {
          padding: '14px 20px 16px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          '&.MuiButton-containedSizeLarge': {
            padding: '16px 32px',
            fontSize: '1.125rem',
            borderRadius: '100px',
          },
          '&.MuiButton-textPrimary': {
            color: colors.text.primary,
          },
        },
      },
    },
  },
})

export const theme = {
  colors,
}

export function ThemeProvider({ children }) {
  return (
    <StyledThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </StyledThemeProvider>
  )
}
