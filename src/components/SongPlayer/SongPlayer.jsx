import React from 'react'
import Player from "@madzadev/audio-player";

const tracks = [
    {
        url: "https://firebasestorage.googleapis.com/v0/b/song-player-back.appspot.com/o/theamericannightmare.mp3?alt=media&token=d3696c53-7456-4375-800a-329f2e92fd9f",
        title: "The American Nightmare",
        tags: ["Metal", "Ice Nine Kills"]   
    },
    {
        url: "https://firebasestorage.googleapis.com/v0/b/song-player-back.appspot.com/o/hiptobescared.mp3?alt=media&token=ae804ea5-4216-4044-aa23-f631c048a906",
        title: "Hip to Be Scared",
        tags: ["Metal", "Ice Nine Kills"]
    }
  ];

  const colors = `html {
    --tagsBackground: #9440f3;
    --tagsText: #ffffff;
    --tagsBackgroundHoverActive: #2cc0a0;
    --tagsTextHoverActive: #ffffff;
    --searchBackground: #18191f;
    --searchText: #ffffff;
    --searchPlaceHolder: #575a77;
    --playerBackground: #18191f;
    --titleColor: #ffffff; 
    --timeColor: #ffffff;
    --progressSlider: #9440f3;
    --progressUsed: #ffffff;
    --progressLeft: #151616;
    --volumeSlider: #9440f3;
    --volumeUsed: #ffffff;
    --volumeLeft:  #151616;
    --playlistBackground: #18191f;
    --playlistText: #575a77;
    --playlistBackgroundHoverActive:  #18191f;
    --playlistTextHoverActive: #ffffff;
}`;

const SongPlayer = () => {
  return (
    <>
        <Player 
            trackList={tracks}
            customColorScheme={colors}
        />
    </>
  )
}

export default SongPlayer