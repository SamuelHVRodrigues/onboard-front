const validateRole = (role: string) => {
  if (!role) {
    return alert('Role is required');
  }

  if (role !== 'admin' && role !== 'user') {
    return alert('Invalid role');
  }
};

export default validateRole;
