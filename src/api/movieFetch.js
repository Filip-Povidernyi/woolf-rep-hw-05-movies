import axios from 'axios';

const API_KEY = '162c66808f40d9926cd1cd1521481975';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
};

export const fetchQueryMovies = async (query) => {
    const response = await axios.get(`search/movie?api_key=${API_KEY}&query=${query}`);
    return response.data.results;
};

export const fetchMovieById = async (movieId) => {
    const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
};

export const fetchCast = async (movieId) => {
    const response = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`);
    return response.data;
};

export const fetchReviews = async (movieId) => {
    const response = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}`);
    return response.data;
};