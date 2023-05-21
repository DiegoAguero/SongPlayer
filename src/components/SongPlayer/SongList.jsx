import React from 'react'
import Song from './Song'
function SongPlayer({songs=[]}) {
  return (
    <>
      <div>
        {
          songs.map((songs, key)=>(
            <Song {...songs} key={key}/>
          ))
        }
      </div>
    </>
  )
}

export default SongPlayer