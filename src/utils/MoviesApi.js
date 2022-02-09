import { moviesApiOptions } from "./constans";

class MoviesApi {
    constructor(options) {
        this._url = options.baseUrl;
    }

    async getMovies() {
        let promise;

        try {
            promise = await fetch(this._url);

            if (promise.ok) {
                return promise.json()
            }

        } catch (error) {
            console.log(error)
        }
    }
}

const moviesApi = new MoviesApi(moviesApiOptions);

export default moviesApi;