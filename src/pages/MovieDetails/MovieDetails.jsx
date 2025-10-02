import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieById } from '../../api/movieFetch';
import MovieCard from "components/MovieCard/MovieCard";
import Loader from "components/Loader/Loader";


const MovieDetails = () => {

    const { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState({});
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const data = await fetchMovieById(movieId);
                setMovieInfo(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [movieId]);
    
    return (
        <div>
            {isLoading && <Loader />}
            {error && <p>Something went wrong: {error.message}</p>}
            {movieInfo && <MovieCard data={movieInfo} />}
        </div>
    )
};


export default MovieDetails;