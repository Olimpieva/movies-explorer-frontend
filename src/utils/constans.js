export const mainApiOptions = {
    baseUrl: 'https://api.search-save-movie.nomoredomains.work',
}

export const moviesApiOptions = {
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
}

export const MAIN_URL = 'http://localhost:3001';
export const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';


export const defaultValidationErrorMessages = {
    valueMissing: () => 'Поле должно быть заполнено.',
    tooShort: ({ minLength }) => `Поле должно содержать минимум ${minLength} символ${minLength < 5 ? `а` : `ов`}`,
    patternMismatch: () => 'Поле заполнено некорректно.',
    typeMismatch: () => 'Поле заполнено некорректно.'
}

export const passwordValidationErrorMessages = {
    patternMismatch: () => 'Поле должно содержать минимум 8 символов, символы нижнего и верхнего регистра, цифры.',
};

export const emailValidationErrorMessages = {
    patternMismatch: () => 'Поле должно содержать корректный адрес.',
}
