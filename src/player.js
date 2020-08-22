import { useState } from 'react'
import styled from 'styled-components'

const Contents = styled('div')`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    padding: 1rem 0;
`

const ScrubBar = styled('div')`
  width: 100%;
  height: 8px;
  padding 2px 16px;
  background-color: ${({ theme }) => theme.colors.surface}
`

const Elapsed = styled('div')`
  width: ${props => props.elapsed}%;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.secondaryVariant};
  transition: width 0.5s;
`

const Player = ({ isPlaying, play, pause }) => {
  const [duration, setDuration] = useState(0)
  const [elapsed, setElapsed] = useState(0)

  const toggleAppIcon = (target) => {
    switch (isPlaying) {
      case true:
        target.textContent = 'play_arrow'
        pause()
        break
      case false:
        target.textContent = 'pause_circle_outline'
        play()
        break
    }
  }

  const updatedElapsed = (target) => {
    const currentTime = target.currentTime
    const percentage = (currentTime / duration) * 100
    setElapsed(percentage)
  }

  const updateDuration = (target) => {
    const totalTime = target.duration
    setDuration(totalTime)
  }

  return (
    <>
      <ScrubBar>
        <Elapsed elapsed={elapsed} />
      </ScrubBar>

      <Contents>
        <audio
          id='app-audio'
          onTimeUpdate={(e) => { updatedElapsed(e.target) }}
          onDurationChange={(e) => { updateDuration(e.target) }}
        />
        <span id='app-rw-btn' className='material-icons-outlined'>fast_rewind</span>
        <span id='app-play-btn' className='material-icons-outlined' onClick={(e) => { toggleAppIcon(e.target) }}>play_arrow</span>
        <span id='app-stop-btn' className='material-icons-outlined'>stop</span>
        <span id='app-ff-btn' className='material-icons-outlined'>fast_forward</span>
      </Contents>
    </>
  )
}
export default Player
