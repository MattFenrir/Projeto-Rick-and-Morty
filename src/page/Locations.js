import React, { useEffect, useState } from 'react'
import CardLocation from '../components/CardLocation'

const Locations = () => {
  const url = 'https://rickandmortyapi.com/api'
  const [locations, setLocations] = useState([])
  const [prev, setPrev] = useState('')
  const [next, setNext] = useState('')

  useEffect(() => {
    http(`${url}/location`)
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
          setLocations(data.results)
          setNext(data.info.next)
          setPrev(data.info.prev)

      }catch(error){ 
          console.log('Error: ' + error.message)
      }
  }

  return (
    <main>
      <div className='planets'>
        { 
          locations.map((item) => 
            <CardLocation key={item.id} location={item} />
          )
        }
      </div>
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
    </main>
  )
}

export default Locations