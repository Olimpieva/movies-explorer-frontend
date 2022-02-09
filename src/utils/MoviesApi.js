import { MOVIES_URL } from "./constans";

class MoviesApi {
    constructor(options) {
        this._url = options.url;
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

const moviesApi = new MoviesApi({ url: MOVIES_URL });

export default moviesApi;