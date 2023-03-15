import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardEpisode = ({episode}) => {
  const navigate = useNavigate()
  const seeMore = (id) => {
    navigate(`/episode/${id}`)
  }

  return (
    <div className='episode-card' onClick={() => seeMore(episode.id)} >
        <h3>Name: {episode.name}</h3>
        <p>Episode: {episode.episode}</p>
        <p>Air date: {episode.air_date}</p>
    </div>
  )
}

export default CardEpisode