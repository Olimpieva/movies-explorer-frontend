import { useCallback, useState } from 'react';

export function useValidation(initialValidationValue = false) {
  const [values, setValues] = useState({});
  const [validityState, setValidityState] = useState({});
  const [isFormValid, setIsFormValid] = useState(initialValidationValue);

  const handleChange = (input) => {
    console.log(input)
    const name = input.name;
    const value = input.value;

    setValues({ ...values, [name]: value });
    setValidityState({ ...validityState, [name]: input.validity });
    setIsFormValid(input.closest('form').checkValidity());
  }

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsFormValid = false) => {
    setValues(newValues);
    setValidityState(newErrors);
    setIsFormValid(newIsFormValid);
  },
    [setValues, setValidityState, setIsFormValid]);

  return { values, validityState, isFormValid, handleChange, resetForm, setValues, setIsFormValid, setValidityState };
}