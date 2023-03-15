import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Character = () => {
    const url = 'https://rickandmortyapi.com/api'
    const {id} = useParams()
    const [character, setCharacter] = useState([])

    useEffect(() => {
      const http = async () => {
          try{
              const response = await fetch(`${url}/character/${id}`)
              const data = await response.json()
              console.log(data)
              setCharacter({...data})

          }catch(error){ 
              console.log('Error: ' + error.message)
          }
      }
      http()
  }, [])

  return (
    <div className='character-card'>
      <h1>{character.name}</h1>
      <div className='image'>
        <img src={character.image} alt="character" />
      </div>
      <div className="info">
        <p className='character-status'>Status: {character.status === 'Alive' ? '🟢' + character.status : character.status === 'Dead' ? '🔴' + character.status : '⚫' + character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Origin: {character?.origin?.name}</p>
      </div>
    </div>
  )
}

export default Character