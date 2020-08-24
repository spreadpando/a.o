import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../theme/globalStyle'
import theme1 from '../theme/theme1'
import Console from '../src/brandConsole'
import Player from '../src/player'

const theme = theme1
const AppContainer = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`
const Brand = styled(motion.h1)`
  position: absolute;
  top: calc(50% - 5rem);
  left: calc(50% - 7rem);
  width: 14rem;
  text-align: center;
  cursor: pointer;
`

const BrandConsole = styled(motion.div)`
  position: absolute;
  width: 14rem;
  top: calc(50% - 2rem);
  left: calc(50% - 7rem);
  text-align: center;
`

const PlayBar = styled('div')`
  position: fixed;
  bottom: 0;
  width: 100%;
`

const app = ({ Component, pageProps }) => {
  const router = useRouter()
  const brandControls = useAnimation()
  const consoleControls = useAnimation()
  const [isPlaying, setIsPlaying] = useState(false)

  const setAudioSrc = (track) => {
    const artist = track.artist
    const trackName = track.track
    document.querySelector('#app-audio').setAttribute('src', `/api/tracks/${artist}+${trackName}`)
  }

  const Play = () => {
    document.querySelector('#app-audio').play()
    setIsPlaying(true)
  }

  const Pause = () => {
    document.querySelector('#app-audio').pause()
    setIsPlaying(false)
  }

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url === '/catalog') {
        brandControls.start({
          top: '15px'
        })
        consoleControls.start({
          opacity: 0,
          top: '85%',
          transitionEnd: { display: 'none' }
        })
      }
      if (url === '/') {
        brandControls.start({
          top: 'calc(50% - 5rem)'
        })
        consoleControls.start({
          opacity: 1,
          top: 'calc(50% - 2rem)',
          transitionEnd: { display: 'block' }

        })
      }
    }

    router.events.on('routeChangeStart', handleRouteChange)
    handleRouteChange(router.pathname)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>A P H Y Y D</title>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
          integrity='sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=='
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,200;0,300;0,500;1,200;1,300;1,500&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Material+Icons'
          rel='stylesheet'
        />

        <link
          href='https://fonts.googleapis.com/css2?family=Material+Icons+Outlined'
          rel='stylesheet'
        />

        <link
          href='https://fonts.googleapis.com/css2?family=Material+Icons+Round'
          rel='stylesheet'
        />

        <link
          href='https://fonts.googleapis.com/css2?family=Material+Icons+Sharp'
          rel='stylesheet'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link
          rel='manifest'
          href='/site.webmanifest'
        />
      </Head>
      <AppContainer>
        <Link href='/'>
          <Brand
            key='brand'
            animate={brandControls}
            transition={{ duration: 1.5 }}

          >
          APHYYD
          </Brand>
        </Link>
        <BrandConsole
          key='console'
          initial={{ opacity: 0 }}
          animate={consoleControls}
          transition={{ duration: 1.5 }}

        >
          <Console theme={theme} />
        </BrandConsole>
        <PlayBar>
          <Player isPlaying={isPlaying} play={Play} pause={Pause} />
        </PlayBar>
        <Component isPlaying={isPlaying} play={Play} pause={Pause} setAudioSrc={setAudioSrc} theme={theme} {...pageProps} />
        <GlobalStyle theme={theme} />
      </AppContainer>
    </ThemeProvider>
  )
}

export default app
