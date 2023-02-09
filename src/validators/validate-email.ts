const validateEmail = (email: string) => {
  const regexEmail = /^[a-zA-Z]+(?:[a-zA-Z0-9])*(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.+[a-z]+)+$/;

  if (!email) {
    return alert('Email is required');
  }

  if (!regexEmail.test(email)) {
    return alert('Invalid email');
  }
};

export default validateEmail;
