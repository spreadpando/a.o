import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../theme/globalStyle'
import theme1 from '../theme/theme1'

const theme = theme1

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle theme={theme} />
      </ThemeProvider>
    )
  }
}
