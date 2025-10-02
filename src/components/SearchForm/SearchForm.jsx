import { useState } from "react";

const SearchForm = ({ submitHandler }) => {

    const [query, setQuery] = useState('');
    
    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                name="query"
                value={query}
                onChange={(evt) => (setQuery(evt.target.value))}
            />
            <button type="submit">Search</button>
        </form>
    )
};

export default SearchForm;