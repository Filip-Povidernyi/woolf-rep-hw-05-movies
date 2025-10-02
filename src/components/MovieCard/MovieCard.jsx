import BackLink from "components/BackLink/BackLink";
import { Link, useLocation, Outlet } from "react-router-dom";
import css from "./style.module.css"
import noImage from "../../assets/noImage.png"


const MovieCard = ({ data }) => {

    const location = useLocation();
    const backLocation = location.state?.from ?? '/';
    const { poster_path, title, release_date, genres, overview, vote_average } = data;

    return (
        <div>
            <BackLink to={backLocation}>Go Back</BackLink>
            <div className={css.wrapper}>
                <img src={
                    poster_path ? 
                        `https://image.tmdb.org/t/p/w500${poster_path}`
                        : `${noImage}`}
                    alt={title}
                    width={300} />
                <div className={css.info}>
                    <h1>{title} ({release_date?.split('-')[0]})</h1>
                    <p>User score: {Math.ceil(Number(vote_average) * 100) / 10}%</p>
                    <div>
                        <h2>Owerview</h2>
                        <p>{overview}</p>
                    </div>
                    <div>
                        <h2>Genres</h2>
                        <div className={css.genres}>
                            {genres?.length > 0 ? (
                                genres.map(genre => <p key={genre.id}>{genre.name}</p>)
                            ) : (
                                <p>No genres info</p>
                                )}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h3>Additional information</h3>
                    <ul>
                        <li><Link to='cast' state={{ from: backLocation }}>Cast</Link></li>
                        <li><Link to='reviews' state={{ from: backLocation }}>Reviews</Link></li>
                    </ul>
                </div>
                <Outlet />
            </div>
        </div>
    );
};


export default MovieCard;