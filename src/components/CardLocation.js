import React from 'react'

const CardLocation = ({location}) => {
  return (
    <div>
      <h3>{location.name}</h3>
      <p>Type: {location.type}</p>
      <p>Dimension: {location.dimension}</p>
    </div>
  )
}

export default CardLocation