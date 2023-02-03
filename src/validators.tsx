function validateLogin(e: any) {
  const input = { email: e.target.elements.email.value, password: e.target.elements.password.value };

  const regexEmail = /^[a-zA-Z]+(?:[a-zA-Z0-9])*(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.+[a-z]+)+$/;
  const regexPassword = /(?=.*\d)(?=.*[a-zA-Z])\w{7,}/;

  if (!input.email) {
    return alert('Email is required');
  }

  if (!regexEmail.test(input.email)) {
    return alert('Invalid email');
  }

  if (!input.password) {
    return alert('Password is required');
  }

  if (!regexPassword.test(input.password)) {
    return alert('Invalid password');
  }
}

export default validateLogin;
