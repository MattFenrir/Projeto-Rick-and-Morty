import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
  const [pesquisar, setPesquisar] = useState("")
  const navigate = useNavigate()

  const search = () => {
    if(pesquisar.trim()){
      navigate(`/search/${pesquisar}`)
      setPesquisar('')
    }
  }

  return (
    <header>
      <div className='img-logo'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzyP9UVUYIwV296NriZ4WKEi6VFBAVv-CZRoqGH_GUdjq0lIQ&s" alt="logo" />
      </div>
      <div className="search">
        <input type="search" onChange={(e) => setPesquisar(e.target.value)} onKeyDown={(e) => e.key === 'Enter' ? search() : null} value={pesquisar} />
        <button onClick={search}>🔍</button>
      </div>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/character">Characters</NavLink>
            <NavLink to="/location">Location</NavLink>
            <NavLink to="/episode">Episodes</NavLink>
            
        </nav>
    </header>
  )
}

export default Header