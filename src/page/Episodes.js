import React, { useEffect, useState } from 'react'
import CardEpisode from '../components/CardEpisode'

const Episodes = () => {
  const url = 'https://rickandmortyapi.com/api'
  const [episodes, setEpisodes] = useState([])
  const [prev, setPrev] = useState('')
  const [next, setNext] = useState('')

  useEffect(() => {
    http(`${url}/episode`)
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
          setEpisodes(data.results)
          setNext(data.info.next)
          setPrev(data.info.prev)

      }catch(error){ 
          console.log('Error: ' + error.message)
      }
  }

  return (
    <div>
      <main className='episodes'>
        {
          episodes.map((item) => 
            <CardEpisode key={item.id} episode={item}/>
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

export default Episodes