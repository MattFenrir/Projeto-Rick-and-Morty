import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardLocation = ({location}) => {
  const navigate = useNavigate()
  const seeMore = (id) => {
    navigate(`/episode/${id}`)
  }

  return (
    <div classname="card-location" onClick={() => seeMore(location.id)}>
      <h3>{location.name}</h3>
      <p>Type: {location.type}</p>
      <p>Dimension: {location.dimension}</p>
    </div>
  )
}

export default CardLocation