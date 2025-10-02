import { fetchCast } from "api/movieFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./style.module.css"
import noImage from "../../assets/noImage.png"
import Loader from "components/Loader/Loader";


const Cast = () => {

    const { movieId } = useParams();
    const [casting, setCasting] = useState();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const castData = async () => {
            try {
                const data = await fetchCast(movieId);
                setCasting(data.cast);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            };
        };
        castData();
    }, [movieId]);


    return (
        <div>
            {isLoading && <Loader />}
            {error && <p>Something went wrong: {error.message}</p>}
            <ul className={css.list}>
                {casting && casting.map(cast => (
                    <li key={cast.cast_id} >
                        <img src={
                            cast.profile_path
                                ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                                : `${noImage}`}
                            alt={cast.name}
                            width='64px'
                        />
                        <p>{cast.name}</p>
                        <p><b>Character: </b></p>
                        <p>{cast.character}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cast;