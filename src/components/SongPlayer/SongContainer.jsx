import React, {useState, useEffect} from 'react'
import {getFirestore} from '../../firebase/config'
import 'firebase/firestore'
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
function SongContainer() {
    const [loading, setLoading] = useState(true)
    const [songs, setSongs] = useState([])

    useEffect(()=>{
        waitSongs()
    }, [])

     const waitSongs = async() =>{
        const db = getFirestore()
        const songs = await db.collection("songs").get()
        try{
            const canciones = songs.docs.map((song)=>{
                return {url: song.data().url, title: song.data().title, tags: song.data().tags}
            })
            setSongs(canciones)
        }catch(e){
            return e
        }finally{
            setLoading(false)
        }
    }


    if(loading) return <h1>cargando</h1>

  return (
    <div>
        <Player 
        trackList={songs}
        />  
    </div>
  )
}

export default SongContainer