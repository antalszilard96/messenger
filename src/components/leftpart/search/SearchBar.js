import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import './SearchBar.css';

const SearchBar = ({ friends, setSearchResults}) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if(!e.target.value) return setSearchResults(friends)

        const resultsArray = friends.filter(friend => friend.name.toUpperCase().includes(e.target.value.toUpperCase()))
        
        setSearchResults(resultsArray)
    }

  return (
    <div className="search">
        <form className="search-form" onSubmit={handleSubmit}>
            <input 
                className="search-input" 
                type="text" 
                id="search" 
                placeholder="Search People"
                onChange={handleSearchChange}
             />
             <button className="search-button">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
             </button>
        </form>
    </div>
  )
}

export default SearchBar