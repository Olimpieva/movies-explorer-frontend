import { MAIN_URL } from "./constans";

class MainApi {
    constructor(options) {
        this._url = options.url;
    }

    async _sendRequest(path, requestOptions) {
        try {
            const response = await fetch(`${this._url}/${path}`, { ...requestOptions, credentials: 'include' });
            if (!response.ok) {
                throw new Error(`Произошла ошибка ${response.status}`)
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    checkToken() {
        return this._sendRequest(`users/me`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        })
    }

    register({ name, email, password }) {
        return this._sendRequest(`signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                password,
            })
        })
    }

    login({ email, password }) {
        return this._sendRequest(`signin`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            })
        })
    }

    logout() {
        return this._sendRequest(`signout`, {})
    }

    updateUserInfo({ name, email }) {
        return this._sendRequest(`users/me`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
            })
        })
    }

    getSavedMovies() {
        return this._sendRequest(`movies`, {
            method: 'GET',
        })
    }

    createSavedMovie(movie) {
        console.log({ 'movie in request': movie })
        return this._sendRequest(`movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        })
    }

    removeSavedMovie(movieId) {
        return this._sendRequest(`movies/${movieId}`, {
            method: 'DELETE',
        })
    }

}

const mainApi = new MainApi({ url: MAIN_URL });

export default mainApi;