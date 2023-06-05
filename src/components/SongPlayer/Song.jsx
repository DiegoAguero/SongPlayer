import React from 'react'

function Song({title, url, tags}) {
  return (
    <div>
        <p>Song name: {title}</p>
        <p>Song: {url}</p>
        <p>Tags: {tags}</p>
    </div>
  )
}

export default Song