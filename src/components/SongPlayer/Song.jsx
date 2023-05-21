import React from 'react'
import Player from "@madzadev/audio-player";

function Song({name = [], url = [], tag = []}) {

  console.log(name);
  console.log(url)
  console.log(tag)

  // const tracks = [
  //   {
  //       url: url,
  //       title: name,
  //       tags: tag   
  //   }
  // ];

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

  return (
    <div>
        {/* <Player 
            // trackList={tracks}
            customColorScheme={colors}
        /> */}
    </div>
  )
}

export default Song