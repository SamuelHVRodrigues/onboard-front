import { useQuery } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import { GET_USER_DETAILS } from '../queries';

const UserDetailsPage = () => {
  const location = useLocation();
  const userId = location.state.id;

  const { data, loading, error } = useQuery(GET_USER_DETAILS, { variables: { userId } });

  return (
    <div>
      <h1>Detalhes do usuário</h1>
      {data && (
        <div>
          <p>Nome: {data.user.name}</p>
          <p>E-mail: {data.user.email}</p>
          <p>Telefone: {data.user.phone}</p>
          <p>Data de nascimento: {data.user.birthDate}</p>
          <p>Função: {data.user.role}</p>
        </div>
      )}
      {loading && <p>Carregando...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default UserDetailsPage;
