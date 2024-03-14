import { BaseURL } from "../utils/constants";

// Get all movies
export const getAllMovies = async () => {
    const url = BaseURL + `/movies`;
    const response = await fetch(`${url}`);
    if (!response.ok) {
        throw new Error('Error while fetching all movies');
    }
    return response.json();
};

// Get movie details by ID
export const getMoviesById = async (id) => {
    const url = BaseURL + `/movies/${id}`;
    const response = await fetch(`${url}`);
    if (!response.ok) {
        throw new Error('Error while fetching movie details');
    }
    return response.json();
};
