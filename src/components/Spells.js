import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Spells = () => {
  const [spells, setSpells] = useState([])

  const getSpells = () => {
    axios.get('https://hp-api.onrender.com/api/spells')
      .then(res => setSpells(res.data))
      .catch(err => console.log(err))
  }

  useEffect(getSpells, [])
  
  return (
    <div>Spells</div>
  )
}

export default Spells