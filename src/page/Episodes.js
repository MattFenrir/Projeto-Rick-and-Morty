import React, { useEffect, useState } from 'react'
import CardEpisode from '../components/CardEpisode'

const Episodes = () => {
  const url = 'https://rickandmortyapi.com/api'
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    const http = async () => {
        try{
            const response = await fetch(`${url}/episode`)
            const data = await response.json()
            console.log(data)
            setEpisodes(data.results)

        }catch(error){ 
            console.log('Error: ' + error.message)
        }
    }
    http()
}, [])

  return (
    <div>
      <main className='episodes'>
        {
          episodes.map((item) => 
            <CardEpisode key={item.id} episode={item}/>
          )
        }
      </main>
    </div>
  )
}

export default Episodes