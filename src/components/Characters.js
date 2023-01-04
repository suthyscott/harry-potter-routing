import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Characters = () => {
    const [characters, setCharacters] = useState([])

    const getChars = () => {
        axios.get('https://hp-api.onrender.com/api/characters')
            .then(res => setCharacters(res.data))
            .catch(err => console.log(err))
    }

    useEffect(getChars, [])

  return (
    <div>Characters</div>
  )
}

export default Characters