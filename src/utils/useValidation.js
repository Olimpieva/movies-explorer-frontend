import { useCallback, useState } from 'react';

export function useValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  console.log({ values })
  console.log({ isValid })

  const setErrorMessage = (input) => {
    const validityState = input.validity;
    console.log({ input })
    console.log({ validityState })

    if (validityState.valid === true) {
      return ''
    }

    if (validityState.typeMismatch) {
      return 'Введите валидный адрес.'
    }

    if (validityState.patternMismatch) {
      const message = input.name === "password" ?
        'Пароль должен содержать минимум 8 символов, символы нижнего и верхнего регистра, цифры.'
        :
        'Поле заполнено некорректно.'
      return message
    }

    if (validityState.tooShort) {
      return `Поле должно содержать минимум ${input.minLength} символа.`
    }

    if (validityState.valueMissinf) {
      return 'Поле должно быть заполнено.'
    }

  }

  const handleChange = (input) => {

    const name = input.name;
    const value = input.value;

    setValues({ ...values, [name]: value });
    const errorMessage = setErrorMessage(input);
    setErrors({ ...errors, [name]: errorMessage });
    setIsValid(input.closest('form').checkValidity());
  }

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  },
    [setValues, setErrors, setIsValid]);

  return { values, errors, isValid, handleChange, resetForm, setValues, setIsValid, setErrors };
}