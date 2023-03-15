import React, { useEffect, useState } from 'react'
import CardCharacter from '../components/CardCharacter'
import CardEpisode from '../components/CardEpisode'
import CardLocation from '../components/CardLocation'

const Home = () => {
  const url = 'https://rickandmortyapi.com/api'
  const [character, setCharacter] = useState([])
  const [location, setLocation] = useState([])
  const [episode, setEpisode] = useState([])



  function generateRandom(max){
    const min = 1
    let randomNumbers = []
    while(randomNumbers.length < 3){
      const randomNum = Math.floor(Math.random() * (max - min) + min)
      
      if(!randomNumbers.includes(randomNum))
        randomNumbers.push(randomNum)
    }
    return randomNumbers.sort()
  }
  

  useEffect(() => {
    const request = async () => {
      setCharacter(await httpRequest(`${url}/character/${generateRandom(826).toString()}`))
      setLocation(await httpRequest(`${url}/location/${generateRandom(126).toString()}`))
      setEpisode(await httpRequest(`${url}/episode/${generateRandom(51).toString()}`))
    }
    request()
  }, [])

  const httpRequest = async (url) => {
    try{
      const response = await fetch(url)
      const data = await response.json()
      return data
    }catch(error){
      console.log('Error: ' + error.message)
  }
}

  return (
    <main>
      <div>
        <h1>Characters</h1>
      </div>
      <section className='character-home'>
        {
          character.map((item) => (
            <CardCharacter key={item.id} character={item} />                        
            ))
        }
      </section>
      <h1>Locations</h1>
        <div className='location-home'>
            {
              location.map((item) => (
                <CardLocation key={item.id} location={item}  />
              ))
            }   
        </div>
  
        <h1>Episodes</h1>
        <div className='episode-home'>
            {
              episode.map((item) => (
                <CardEpisode key={item.id} episode={item} />
              ))
            }   
        </div>
    </main>
  )
}

export default Home