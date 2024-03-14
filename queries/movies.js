import { BaseURL } from "../utils/constants";

export const getAllMovies = async () => {
    const url = BaseURL + '/movies';
    const response = await fetch(`${url}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};
