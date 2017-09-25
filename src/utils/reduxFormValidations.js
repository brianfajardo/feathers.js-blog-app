export const validateLogin = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password || values.password.trim() === '') {
    errors.password = 'Required'
  }

  return errors
}

// New user account
export const validateRegistration = values => {
  const errors = {}

  if (!values.username || values.username.trim() === '') {
    errors.username = 'Required'
  } else if (values.username.length < 3) {
    errors.username = 'Username must be greater than 3 characters'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password || values.password.trim() === '') {
    errors.password = 'Required'
  } else if (values.password.length < 6) {
    errors.password = 'Password must be greater than 6 characters'
  }

  if (!values.retypedPassword || values.retypedPassword.trim() === '') {
    errors.retypedPassword = 'Retype above password'
  } else if (values.password !== values.retypedPassword) {
    errors.retypedPassword = 'Passwords do not match. Try again!'
  }

  return errors
}

export const validatePost = values => {
  const errors = {}

  if (!values.title || values.title.trim() === '') {
    errors.title = 'Required'
  }

  if (!values.subtitle || values.subtitle.trim() === '') {
    errors.subtitle = 'Give it a subtitle or a quick description!'
  }

  if (!values.keywords || values.keywords.trim() === '') {
    errors.keywords = 'Enter some keywords'
  }

  if (!values.content || values.content.trim() === '') {
    errors.content = 'Required'
  }

  return errors
}
