import React, { useEffect, useState } from 'react'
import CardLocation from '../components/CardLocation'

const Locations = () => {
  const url = 'https://rickandmortyapi.com/api'
  const [locations, setLocations] = useState([])

  useEffect(() => {
    const http = async () => {
        try{
            const response = await fetch(`${url}/location`)
            const data = await response.json()
            console.log(data)
            setLocations(data.results)

        }catch(error){ 
            console.log('Error: ' + error.message)
        }
    }
    http()
}, [])

  return (
    <main className='places'>
      { 
        locations.map((item) => 
          <CardLocation key={item.id} location={item} />
        )
      }
    </main>
  )
}

export default Locations