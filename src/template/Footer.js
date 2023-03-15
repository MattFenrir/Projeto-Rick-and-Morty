import React from 'react'

const Footer = () => {
  const year = new Date()

  return (
    <footer>
      <p>
      ® {year.getFullYear()} Mateus Mainardi
      </p> 
    </footer>
  )
}

export default Footer