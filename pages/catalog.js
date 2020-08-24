import { motion } from 'framer-motion'
import styled from 'styled-components'
const cat = [{ artist: 'aphyyd', track: 'raven.mp3' }]
const TrackList = styled('ul')`
  margin: 5rem 0;
  width: 100%;
  li{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  hr{
    width: 100%;
  }


`
const PageContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: center;
`

const Catalog = ({ setAudioSrc, isPlaying, play, pause, theme }) => {
  const toggleIcon = (target, track) => {
    document.querySelectorAll('.play-btn').forEach((item) => {
      item.textContent = 'play_arrow'
    })
    switch (isPlaying) {
      case true:
        target.textContent = 'play_arrow'
        document.querySelector('#app-play-btn').textContent = 'play_arrow'
        pause()
        break
      case false:
        target.textContent = 'pause_circle_outline'
        document.querySelector('#app-play-btn').textContent = 'pause_circle_outline'
        setAudioSrc(track)
        play()
        break
    }
  }

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
    >
      <TrackList>
        {cat.map((track, index) => {
          return (
            <li key={index}>
              <hr />
              <span>{track.artist}</span>
              <span>{track.track}</span>
              <span className='play-btn material-icons-outlined' onClick={(e) => { toggleIcon(e.target, track) }}>play_arrow</span>
            </li>
          )
        })}
      </TrackList>
    </PageContainer>
  )
}

export default Catalog
