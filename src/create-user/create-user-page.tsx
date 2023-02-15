import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title, Wrapper } from '../styled';
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
    <Wrapper>
      <Title>Criar usuário</Title>
      <CreateUserForm validateAndCreateUser={validataAndCreateUser} loading={loading} />
      {error && <p>Error: {error.message}</p>}
    </Wrapper>
  );
}

export default CreateUserPage;
