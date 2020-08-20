import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100vh;
    min-width: 100vw;
    max-height: 100vh;
    max-width: 100vw;
  }
  h1 {
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 300;
    font-size: 1.2rem;
    letter-spacing: 1rem;
  }
  h2 {
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 500;
    font-style: italic;
    font-size: 0.9rem;
  }
  p {
    font-size: 0.9rem;
    font-weight: 300;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    width: 100%;
    color: ${({ theme }) => theme.colors.link}
  }
`
