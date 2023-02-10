const validateName = (name: string) => {
  const regexName = /[a-záéíóúâêôãõç]{4,}/i;

  if (!name) {
    return alert('Name is required');
  }

  if (!regexName.test(name)) {
    return alert('Invalid name');
  }
};

export default validateName;
