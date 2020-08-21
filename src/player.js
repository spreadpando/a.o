import styled from 'styled-components'

const Contents = styled('div')`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 1rem;
`
const Player = ({ isPlaying, play, pause }) => {
  const toggleAppIcon = (target) => {
    switch (isPlaying) {
      case true:
        console.log('case true')

        target.textContent = 'play_arrow'
        pause()
        break
      case false:
        console.log('case false')
        target.textContent = 'pause_circle_outline'
        play()
        break
    }
  }

  return (
    <Contents>
      <audio id='app-audio' />
      <span id='app-rw-btn' className='material-icons-outlined'>fast_rewind</span>
      <span id='app-play-btn' className='material-icons-outlined' onClick={(e) => { toggleAppIcon(e.target) }}>play_arrow</span>
      <span id='app-stop-btn' className='material-icons-outlined'>stop</span>
      <span id='app-ff-btn' className='material-icons-outlined'>fast_forward</span>
    </Contents>
  )
}
export default Player
