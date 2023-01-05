
import './CharCard.css'
import { NavLink } from 'react-router-dom'


const CharCard = ({char}) => {
    
  return (
    <div className='char-card'>
        <h1>{char.name}</h1>
        <h3>{char.house}</h3>
        <img src={char.image}/>
        <NavLink to={`/character/${char.name.replace(/\s/g, '')}`}>See Character Details</NavLink>
    </div>
  )
}

export default CharCard