import React from 'react'

const CardEpisode = ({episode}) => {
  return (
    <div>
        <h3>{episode.name}</h3>
        <p>{episode.episode}</p>
        <p>Released: {episode.released}</p>
        <p>Created: {episode.created}</p>
    </div>
  )
}

export default CardEpisode