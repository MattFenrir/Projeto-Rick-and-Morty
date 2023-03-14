import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardCharacter from '../components/CardCharacter'

const Search = () => {
    const { search } = useParams()
    const url = 'https://rickandmortyapi.com/api'
    const [character, setCharacter] = useState([])

    useEffect(() => {
        const requests = async () => {
            const response = await fetch(`${url}/character`)
            const data = await response.json()
            const lista = data.results
            const array = lista.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
            console.log(array)
            
            setCharacter(array)
        }
        requests()
    }, [search])

  return (
    <div>
      <h2>{search}</h2>
      <main className="character">
        {
            character.length > 0
            ?
                <section className='card-character'>
                    {
                        character.map((item) => (
                            <CardCharacter key={item.id} character={item} />
                        ))
                    }
                </section>
            :
                <p className='not-found'>404, Not Found</p>
        }
      </main>
    </div>
  )
}

export default Search