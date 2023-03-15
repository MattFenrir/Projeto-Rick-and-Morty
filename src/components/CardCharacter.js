import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardCharacter = ({character}) => {
    const navigate = useNavigate()
    const seeMore = (id) => {
        navigate(`/character/${id}`)
    }

  return (
    <div onClick={() => seeMore(character.id)}>
      <div className='image'>
        <img src={character.image} alt="character" />
      </div>
      <div className="info">
        <h3>{character.name}</h3>
        <p className='character-status'>Status: {character.status === 'Alive' ? '🟢' + character.status : character.status === 'Dead' ? '🔴' + character.status : '⚫' + character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
      </div>
    </div>
  )
}

export default CardCharacter