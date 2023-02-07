const validateLoginInput = (input: { email: string; password: string }) => {
  const { email, password } = input;

  const regexEmail = /^[a-zA-Z]+(?:[a-zA-Z0-9])*(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.+[a-z]+)+$/;
  const regexPassword = /(?=.*\d)(?=.*[a-zA-Z])\w{7,}/;

  if (!email) {
    return alert('Email is required');
  }

  if (!regexEmail.test(email)) {
    return alert('Invalid email');
  }

  if (!password) {
    return alert('Password is required');
  }

  if (!regexPassword.test(password)) {
    return alert('Invalid password');
  }
};

export default validateLoginInput;
