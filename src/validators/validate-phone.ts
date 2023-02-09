const validatePhone = (phone: string) => {
  const regexPhone = /\d{11}/;

  if (!phone) {
    return alert('Phone is required');
  }

  if (!regexPhone.test(phone)) {
    return alert('Invalid phone');
  }
};

export default validatePhone;
