import React, { useEffect, useState } from 'react'
import CardCharacter from '../components/CardCharacter'
import CardEpisode from '../components/CardEpisode'
import CardLocation from '../components/CardLocation'

const Home = () => {
  const url = 'https://rickandmortyapi.com/api'
  const [character, setCharacter] = useState([])
  const [location, setLocation] = useState([])
  const [episode, setEpisode] = useState([])

  useEffect(() => {
    const http = async () => {
        try{
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
          setCharacter({...data})
          setLocation({...data})
          setEpisode({...data})

        }catch(error){ 
            console.log('Error: ' + error.message)
        }
    }
    http()
}, [])

return (
  <div className='div-home'>
    <h2>Characters</h2>
    <div className='characters-home'>
        {
          character.map((item) => (
            <CardCharacter key={item.id} character={item} />                        
            ))
        }
    </div>
    <h2>Locations</h2>
    <div className='locations-home'>
        {
          location.map((item) => (
            <CardLocation key={item.id} location={item}  />
          ))
        }   
    </div>
    <h2>Episodes</h2>
    <div className='episodes-home'>
        {
          episode.map((item) => (
            <CardEpisode key={item.id} episode={item} />
          ))
        }   
    </div>s
</div>
)
}

export default Home