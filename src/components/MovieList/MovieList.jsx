import MovieItem from "components/MovieItem/MovieItem";


const MovieList = ({ movies }) => {
    return (
        <ul>
            {movies.map(movie => (
                <MovieItem key={movie.id} data={movie} />
            ))}
        </ul>
    )
};



export default MovieList;