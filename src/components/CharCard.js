import React from 'react'
import './CharCard.css'

const CharCard = ({char}) => {
    // const {char} = props
  return (
    <div className='char-card'>
        <h1>{char.name}</h1>
        <h3>{char.house}</h3>
        <img src={char.image}/>
    </div>
  )
}

export default CharCard