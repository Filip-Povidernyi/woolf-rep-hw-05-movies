import { useEffect, useState } from "react";
import { fetchPopularMovies } from '../../api/movieFetch';
import MovieList from "components/MovieList/MovieList";
import Loader from "components/Loader/Loader";



const Home = () => {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const response = async () => {
            try {
                const data = await fetchPopularMovies();
                setMovies(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        response();
    }, [])
    
    return (
        <div>
            <h1>Trending today</h1>
            {isLoading && <Loader />}
            {error && <p>Something went wrong: {error.message}</p>}
            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    );


};


export default Home;