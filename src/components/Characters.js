import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import CharCard from "./CharCard"
import "./Characters.css"
import CharSearchForm from "./CharSearchForm"

const Characters = () => {
    const [characters, setCharacters] = useState([])

    const getChars = () => {
        axios
            .get("https://hp-api.onrender.com/api/characters")
            .then(res => setCharacters(res.data))
            .catch(err => console.log(err))
    }

    useEffect(getChars, [])

    const charSearch = searchTerm => {
        const result = characters.filter(char => {
            if (char.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return char
            }
        })
        setCharacters(result)
    }

    return (
        <main>
          <CharSearchForm charSearch={charSearch}/>
            <div className="char-cards-container">
                {characters.map((char, index) => {
                    return <CharCard char={char} />
                })}
            </div>
        </main>
    )
}

export default Characters
