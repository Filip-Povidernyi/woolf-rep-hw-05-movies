import { fetchQueryMovies } from "api/movieFetch";
import Loader from "components/Loader/Loader";
import MovieList from "components/MovieList/MovieList";
import SearchForm from "components/SearchForm/SearchForm";
import { useEffect, useState } from "react";



const Movies = () => {

    const [search, setSearch] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState('');

    const submitHandler = async (evt) => {
        evt.preventDefault();
        const query = evt.currentTarget.query.value;
        if (query.trim() === '') {
            alert('Please enter a search query');
            return;
        };
        setQuery(query);
    };

    useEffect(() => {
        setIsLoading(true);
        const response = async () => {
            try {
                const data = await fetchQueryMovies(query);
                setSearch(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        response();
    }, [query]);

    return (
        <div>
            <SearchForm submitHandler={submitHandler} />
            {isLoading && <Loader />}
            {error && <p>Something went wrong: {error.message}</p>}
            {search.length > 0 && <MovieList movies={search} />}
        </div>
    )
};

export default Movies;