import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Home = ({ track }) => {
  return (
    <>
      <Title>aphyyd</Title>
      <audio controls src='/api/tracks/raven.mp3' />

    </>
  )
}

export default Home
