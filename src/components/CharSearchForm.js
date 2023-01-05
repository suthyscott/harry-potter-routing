import { useState } from "react"

const CharSearchForm = ({setSearchInput, searchInput}) => {
    

    // const submitSearch = (e) => {
    //     e.preventDefault()
    //     charSearch(searchInput)
    // }

    return (
        <div>
            <input
                placeholder="Search for you favorite character!"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
            />
            <button>Search</button>
        </div>
    )
}

export default CharSearchForm
