import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
  }
`
