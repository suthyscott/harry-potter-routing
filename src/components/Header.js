import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/spells'>Spells</NavLink>
        <NavLink to='/characters'>Characters</NavLink>
    </div>
  )
}

export default Header