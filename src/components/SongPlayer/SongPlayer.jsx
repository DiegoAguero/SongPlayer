import React from 'react'
import Player from "@madzadev/audio-player";

const tracks = [
    {
        url: "https://cdn.discordapp.com/attachments/428318063990013952/1109848545378455652/theamericannightmare.mp3",
        title: "The American Nightmare",
        tags: ["Metal", "Ice Nine Kills"]   
    },
    {
        url: "https://cdn.discordapp.com/attachments/428318063990013952/1109849612308709416/hiptobescared.mp3",
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