import { motion } from 'framer-motion'
import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled('nav')`
  text-align: left;
  width: 100%;
  a {
    display: inline-block;
  }
`
const LinkDesc = styled(motion.div)`
  width: 100%;
  margin: 0.1rem 0;
  h2, p {
    margin: 0;
    display: inline-block;
  }
  p {
    float: right;
  }
`
const BrandIcon = styled('img')`
  width: 24px;
  height: 24px;
  margin: 0.25rem 0;
`

const Console = ({ theme }) => {
  return (
    <>
      <Nav>
        <ul>
          <li>
            <Link href='/catalog'>
              <a>
                <LinkDesc whileHover={{ color: theme.colors.secondary }}>
                  <h2>catalog</h2><p>streaming audio</p>
                </LinkDesc>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/info'>
              <a>
                <LinkDesc whileHover={{ color: theme.colors.secondary }}>
                  <h2>info</h2><p>artist statement</p>
                </LinkDesc>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a>
                <LinkDesc whileHover={{ color: theme.colors.secondary }}>
                  <h2>contact</h2><p>work with me</p>
                </LinkDesc>
              </a>
            </Link>
          </li>
        </ul>
      </Nav>
      <a rel='noopener noreferrer' target='_blank' href='https://github.com/spreadpando/'>
        <BrandIcon src={theme.icons.github} />
      </a>
    </>
  )
}
export default Console
