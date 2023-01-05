import { useEffect, useState } from "react"
import axios from "axios"
import CharCard from "./CharCard"
import "./Characters.css"
import CharSearchForm from "./CharSearchForm"

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [searchInput, setSearchInput] = useState("")

    const getChars = () => {
        axios
            .get("https://hp-api.onrender.com/api/characters")
            .then(res => setCharacters(res.data))
            .catch(err => console.log(err))
    }

    useEffect(getChars, [])


    let charDisplay = characters.filter(char => {
        if (char.name.toLowerCase().includes(searchInput.toLowerCase())) {
            return char
        }
    }).map((char, index) => {
        return <CharCard char={char} />
    })

    console.log(charDisplay)
    return (
        <main>
          <CharSearchForm setSearchInput={setSearchInput} searchInput={searchInput}/>
            <div className="char-cards-container">
                {charDisplay}
            </div>
        </main>
    )
}

export default Characters
