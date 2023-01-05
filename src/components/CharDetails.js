import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const CharDetails = () => {
  const [character, setCharacter] = useState({})
  const params = useParams()
  const {name} = params

    const getChar = () => {
      axios.get("https://hp-api.onrender.com/api/characters")
        .then(res => {
          const [char] = res.data.filter(element => element.name.replace(/\s/g, '') === name)
          setCharacter(char)
        })
    }

    useEffect(getChar, [])
  return (
    <div>CharDetails</div>
  )
}

export default CharDetails