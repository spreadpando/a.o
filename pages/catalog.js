import styled from 'styled-components'
const cat = ['raven.mp3', 'raven.mp3', 'raven.mp3', 'raven.mp3', 'raven.mp3', 'raven.mp3', 'raven.mp3', 'raven.mp3', 'raven.mp3']
const TrackList = styled('ul')`
  margin: 5rem 0;
  width: 100%;


`
const PageContainer = styled('div')`
  display: flex;
  width: 100%;
  justify-content: center;
`

const Catalog = ({ theme }) => {
  const togglePlay = (target, index) => {
    console.log('fire')
    document.querySelectorAll('audio').forEach(el => {
      el.pause()
    })
    document.querySelector(`#track-${index}`).play()
    target.textContent = 'pause_circle_outline'
  }

  return (
    <PageContainer>
      <TrackList>
        {cat.map((track, index) => {
          return (
            <li key={index}>
              <hr />
              <p>{track}</p>
              <span className='togglePlay material-icons-outlined' onClick={(e) => { togglePlay(e.target, index) }}>play_arrow</span>
              <audio id={`track-${index}`} src={`/api/tracks/${track}`} />
            </li>
          )
        })}
      </TrackList>
    </PageContainer>
  )
}

export default Catalog
