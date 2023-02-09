const validateBirthDate = (birthDate: string) => {
  const regexBirthDate =
    /((?:18[0-9]{2})|(?:19[0-9]{2})|(?:20[0-1][0-9])|(?:202[0-2]))[-]((?:0[1-9])|(?:1[0-2]))[-]((?:0[0-9])|(?:[1-2][0-9])|(?:3[0-1]))/;

  if (!birthDate) {
    return alert('BirthDate is required');
  }

  if (!regexBirthDate.test(birthDate)) {
    return alert('Invalid birthDate');
  }
};

export default validateBirthDate;
