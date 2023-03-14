import React, { useEffect, useState } from 'react'
import CardCharacter from '../components/CardCharacter'

const Characters = () => {
    const url = 'https://rickandmortyapi.com/api'
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const http = async () => {
            try{
                const response = await fetch(`${url}/character`)
                const data = await response.json()
                console.log(data)
                setCharacters(data.results)

            }catch(error){ 
                console.log('Error: ' + error.message)
            }
        }
        http()
    }, [])

  return (
    <div className='characters'>
      <main className='card-characters'>
        {
            characters.map((item) =>
              <CardCharacter key={item.id} character={item} />
            )
        }
      </main>
    </div>
  )
}

export default Characters