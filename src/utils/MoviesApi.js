import { MOVIES_URL } from "./constans";

class MoviesApi {
    constructor(url) {
        this._url = url;
    }

    async getMovies() {

        try {
            const response = await fetch(this._url);

            if (!response.ok) {
                throw new Error(`Произошла ошибка ${response.status}`)
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error)
        }
    }

}

const moviesApi = new MoviesApi(MOVIES_URL);

export default moviesApi;