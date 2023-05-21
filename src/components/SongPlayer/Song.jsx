import React from 'react'

function Song({song_name, song, id}) {
  return (
    <div>
        <p>Song name: {song_name}</p>
        <p>Song: {song}</p>
        <p>Id: {id}</p>
    </div>
  )
}

export default Song