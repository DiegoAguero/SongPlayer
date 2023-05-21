import React, {useState} from 'react'
import Song from './Song'
function SongList({songs=[]}) {
  // const [name, setName] = useState([])
  // const [url, setUrl] = useState([])
  // const [tag, setTag] = useState([])
  const [items, setItems] = useState([]);

  const addItems = (name, url, tag) => {
    setItems([...items, {
      name,
      url,
      tag
    }]);
  };


  // Concepto de como podríamos hacer para que se guarden los datos para luego leerlos en Song.jsx

  // const tracks = [ 

  //   
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
  //   

  // ]
  let cont = 0;
  return (
    <>
      <div>
        {/* {
          songs.map((song)=>{
            setName(song.song_name)
            setUrl(song.song)
            setTag(song.tags)
            addItems(name, url, tag)
          }
        )}
        <Song name={name} url={url} tag={tag}/>  */}
        {songs.map((song, id) => {
          cont++;
          if(cont < (songs.length)){
            addItems(song.song_name, song.song, song.tags)
          }
          console.log(id)})}
      </div>
    </>
  )
}

export default SongList