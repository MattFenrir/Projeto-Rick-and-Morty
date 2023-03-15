import React from 'react'

const Footer = () => {
  const year = new Date()

  return (
    <footer>
      <p>
      - {year.getFullYear()} Mateus
      </p> 
    </footer>
  )
}

export default Footer