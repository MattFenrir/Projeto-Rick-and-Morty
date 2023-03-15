import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardCharacter from '../components/CardCharacter'
import CardEpisode from '../components/CardEpisode'
import CardLocation from '../components/CardLocation'

const Search = () => {
    const { search } = useParams()
    const url = 'https://rickandmortyapi.com/api'
    const [character, setCharacter] = useState([])
    const [episode, setEpisode] = useState([])
    const [location, setLocation] = useState([])

    useEffect(() => {
        const requests = async () => {
            let response = await fetch(`${url}/character`)
            let data = await response.json()
            const list = data.results
            const array = list.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
            console.log(array)
            setCharacter(array)

            response = await fetch(`${url}/episode`)
            data = await response.json()
            const list2 = data.results
            const arrayEpisodes = list2.filter((item) => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            console.log(arrayEpisodes)
            setEpisode(arrayEpisodes)

            response = await fetch(`${url}/location`)
            data = await response.json()
            const list3 = data.results
            const arrayLocation = list3.filter((item) => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            console.log(arrayLocation)
            setLocation(arrayLocation)
        }
        requests()
    }, [search])

  return (
    <div className='search'>
      <h2>{search}</h2>
      <h1>Character</h1>
      <div className="character">
        {
            character.length > 0
            ?
                <section className='character-card'>
                    {
                        character.map((item) => (
                            <CardCharacter key={item.id} character={item} />
                        ))
                    }
                </section>
            :
                <p className='not-found'>404, Not Found</p>
        }
      </div>
      <h1>Episode</h1>
      <div className='episode'>
        {
                episode.length > 0
                ?
                    <div className="episode-card">
                        {
                            episode.map((item) => (
                                <CardEpisode key={item.id} episode={item} />
                            ))
                        }
                    </div>
                :
                    <p className="list-notfound">404, Not Found</p>
        }
        </div>
      <h1>Location</h1>
      <div className='location'>
        {
                location.length > 0
                ?
                    <div className="location-card">
                        {
                            location.map((item) => (
                                <CardLocation key={item.id} location={item} />
                            ))
                        }
                    </div>
                :
                    <p className="list-notfound">404, Not Found</p>
        }
        </div>
    </div>
  )
}

export default Search