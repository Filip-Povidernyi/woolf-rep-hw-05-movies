import { Link, useLocation } from "react-router-dom";

const MovieItem = ({ data }) => {
    const location = useLocation();
    return (
        <li>
            <Link to={`/movies/${data.id}`} state={{ from: location }}>{data.title}</Link>
        </li>
    )
};


export default MovieItem;