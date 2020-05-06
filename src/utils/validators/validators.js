export const required = value => {
  if (value) return undefined
  return 'Field is required!'
}

export const matchInput = (currentInput, allFields) => currentInput === allFields.password ? undefined : 'Пароль не совпадает'