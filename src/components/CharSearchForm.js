import { useState } from "react"

const CharSearchForm = ({charSearch}) => {
    const [searchInput, setSearchInput] = useState("")

    const submitSearch = (e) => {
        e.preventDefault()
        charSearch(searchInput)
    }
    return (
        <form onSubmit={e => submitSearch(e)}>
            <input
                placeholder="Search for you favorite character!"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
            />
            <button>Search</button>
        </form>
    )
}

export default CharSearchForm
