import React, {useState} from 'react'
import Song from './Song'
function SongList({songs=[]}) {
  const [name, setName] = useState([])
  const [url, setUrl] = useState([])
  const [tag, setTag] = useState([])

  // Concepto de como podríamos hacer para que se guarden los datos para luego leerlos en Song.jsx

  // const tracks = [ 

  //   Songs = [
  //     {
  //       name : "name",
  //       url : "url",
  //       tag : "tag"
  //     },
  //     {
  //       name : "name",
  //       url : "url",
  //       tag : "tag"
  //     },
  //     {
  //       name : "name",
  //       url : "url",
  //       tag : "tag"
  //     }
  //   ]

  // ]

  return (
    <>
      <div>
        {
          songs.map((song)=>{
            setName(song.song_name)
            setUrl(song.song)
            setTag(song.tags)
          }
        )}
        <Song name={name} url={url} tag={tag}/> 
      </div>
    </>
  )
}

export default SongList