export const mainApiOptions = {
    baseUrl: 'https://api.search-save-movie.nomoredomains.work',
};

export const moviesApiOptions = {
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
};

export const MAIN_URL = 'http://localhost:3001';
export const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';


export const defaultValidationErrorMessages = {
    valueMissing: () => 'Поле должно быть заполнено.',
    tooShort: ({ minLength }) => `Поле должно содержать минимум ${minLength} символ${minLength < 5 ? `а` : `ов`}`,
    patternMismatch: () => 'Поле заполнено некорректно.',
    typeMismatch: () => 'Поле заполнено некорректно.'
};

export const passwordValidationErrorMessages = {
    patternMismatch: () => 'Поле должно содержать минимум 8 символов, символы нижнего и верхнего регистра, цифры.',
};

export const emailValidationErrorMessages = {
    patternMismatch: () => 'Поле должно содержать корректный адрес.',
    typeMismatch: () => 'Поле должно содержать корректный адрес.',
};

export const responseErrorMessages = {
    updateUserError: 'При обновлении профиля произошла ошибка.',
    registerUserError: 'При регистрации пользователя произошла ошибка.',
    loginUserError: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.',
    invalidTokenData: 'При авторизации произошла ошибка. Переданный токен некорректен.',
    invalidUserData: 'Вы ввели неправильный логин или пароль.',
    invalidMoviesData: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.',
    noMoviesData: 'Ничего не найдено.',
    userAlreadyExist: 'Пользователь с таким email уже существует.',
    serverError: 'На сервере произошла ошибка.',
    pageNotFound: 'Страница по указанному маршруту не найдена.',
};

export const screenParams = {
    desktop: {
        width: 1024,
        params: {
            initial: 12,
            more: 3
        }
    },
    tablet: {
        width: 768,
        params: {
            initial: 8,
            more: 2
        }
    },
    mobile: {
        width: 320,
        params: {
            initial: 5,
            more: 2
        }
    },
};