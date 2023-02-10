const validatePassword = (password: string) => {
  const regexPassword = /(?=.*\d)(?=.*[a-zA-Z])\w{7,}/;

  if (!password) {
    return alert('Password is required');
  }

  if (!regexPassword.test(password)) {
    return alert('Invalid password');
  }
};

export default validatePassword;
