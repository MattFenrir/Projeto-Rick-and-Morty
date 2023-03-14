import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardCharacter = ({character}) => {

    const navigate = useNavigate()
    const seeMore = (id) => {
        navigate(`/character/${id}`)
    }
  return (
    <div onClick={() => seeMore(character.id)} className='character-full-card'>
      <div className='image'>
        <img src={character.image} alt="character" />
      </div>
      <div className="info">
        <h3>{character.name}</h3>
        <p style={{backgroundColor: character.status==="Unknown" ? 'gray' : character.status==="Alive" ? 'green' : 'red'}}>{character.status}</p>
        <p>{character.gender}</p>
      </div>
    </div>
  )
}

export default CardCharacter