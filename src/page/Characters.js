import React, { useEffect, useState } from 'react'
import CardCharacter from '../components/CardCharacter'

const Characters = () => {
  const url = 'https://rickandmortyapi.com/api'
  const [characters, setCharacters] = useState([])
  const [prev, setPrev] = useState('')
  const [next, setNext] = useState('')

  useEffect(() => {
    http(`${url}/character`)
  }, [])

  const button = (type) => {
    type === 0
      ?
      http(prev)
      :
      http(next)
  }

  const http = async (url) => {
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setCharacters(data.results)
        setNext(data.info.next)
        setPrev(data.info.prev)

    }catch(error){ 
        console.log('Error: ' + error.message)
    }
}

return (
  <div className='characters'>
    <main className='card-characters'>
      {
          characters.map((item) =>
            <CardCharacter key={item.id} character={item} />
          )
      }
    </main>
    <section className='page-buttons'>
        {
            prev && <button onClick={() => button(0)}>PREVIOUS</button>
        }
        {
            !prev && <button disabled>PREVIOUS</button>
        }
        {
            next && <button onClick={() => button(1)}>NEXT</button>
        }
        {
            !next && <button disabled>NEXT</button>
        }
    </section>
  </div>
)
}

export default Characters