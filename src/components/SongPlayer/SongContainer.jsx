import React, {useState, useEffect} from 'react'
import {getFirestore} from '../../firebase/config'
import 'firebase/firestore'
import SongList from './SongList';
function SongContainer() {
    const [song, setSong] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        const db = getFirestore()
        const songs = db.collection("songs")
        const filtrado = songs.where("tags", "==", "metal")
        
        filtrado.get()
            .then((res)=>{
                const newSong = res.docs.map((doc)=>{
                    return {id: doc.id, ...doc.data()}
                })
                setSong(newSong)
            })
            .catch((error) => console.log(error))
            .finally(setLoading(false))
    }, [])
    // const getSongs = async () =>{
    //     const db = getFirestore();
    //     const songs = db.collection("songs");
    //     const doc = await songs.get()
    //     const newSong =  doc.docs.map((res)=>{
    //         return {id: res.id, ...res.data()}
    //     })
    //     setSong(newSong)

    //         // .then((res)=>{
    //         //     const newSong = res.docs.map((doc)=>{
    //         //         return {id: doc.id, ...doc.data()}
    //         //     })
    //         //     setSong(newSong)
    //         // })
    // }
    // getSongs()
  return (
    <div>
        {
            loading?
            <div>
                <h1>Cargando</h1>
            </div>
            :
            <SongList songs={song}/>
            // songs={song}
        }
    </div>
  )
}

export default SongContainer