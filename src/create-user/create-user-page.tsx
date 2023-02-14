import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateUserForm from './create-user-form';
import useCreateUser from './use-create-user';

function CreateUserPage() {
  const [validataAndCreateUser, { user, loading, error }] = useCreateUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/users-list');
    }
  }, [user]);

  return (
    <div>
      <h1>Criar usuário</h1>
      <CreateUserForm validateAndCreateUser={validataAndCreateUser} loading={loading} />
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}

export default CreateUserPage;
