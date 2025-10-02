import { fetchReviews } from "api/movieFetch";
import Loader from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const Reviews = () => {

    const { movieId } = useParams();
    const [reviews, setReviews] = useState();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const reviewData = async () => {
            try {
                const data = await fetchReviews(movieId);
                setReviews(data.results);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            };
        };
        reviewData();
    }, [movieId]);

    return (
        <div>
            {isLoading && <Loader />}
            {error && <p>Something went wrong: {error.message}</p>}
            <ul>
                {(reviews && reviews.length > 0) ? reviews.map(review => (
                    <li key={review.id}>
                        <h3>Author: {review.author}</h3>
                        <p>{review.content}</p>
                    </li>
                )) : <h3>We don't have any reviews for this movie</h3>}
            </ul>
        </div>
    )

};


export default Reviews;