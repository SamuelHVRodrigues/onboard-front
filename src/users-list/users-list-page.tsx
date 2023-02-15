import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { USERS } from '../queries';
import Button from '../utils/button';

interface User {
  id: string;
  name: string;
  email: string;
}

const LIMIT_OF_USERS_TO_SHOW = 10;

const UsersListPage = () => {
  const [getUsers, { data, loading, error }] = useLazyQuery(USERS);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers({ variables: { limit: LIMIT_OF_USERS_TO_SHOW, offset: 0 } });
  }, []);

  return (
    <div>
      <h1>Lista de usuários</h1>
      <div>
        {!localStorage.getItem('token') && <Link to='/'>Faça login</Link>}
        {data && (
          <div>
            <Link to={'/create-user'}>Criar usuário</Link>
            <ul>
              {data?.users.nodes.map((user: User, index: number) => (
                <li
                  key={index}
                  onClick={() => {
                    navigate('/user-details', { state: { id: user.id } });
                  }}
                >
                  Name: {user.name} | Email: {user.email}
                </li>
              ))}
            </ul>
            <Button
              onClick={() =>
                getUsers({
                  variables: {
                    limit: LIMIT_OF_USERS_TO_SHOW,
                    offset: data?.users.pageInfo.offset - LIMIT_OF_USERS_TO_SHOW,
                  },
                })
              }
              text={'previous'}
              loading={loading}
              disabled={!data?.users.pageInfo.hasPreviousPage}
            />
            <Button
              onClick={() =>
                getUsers({
                  variables: {
                    limit: LIMIT_OF_USERS_TO_SHOW,
                    offset: data?.users.pageInfo.offset + LIMIT_OF_USERS_TO_SHOW,
                  },
                })
              }
              text={'next'}
              loading={loading}
              disabled={!data?.users.pageInfo.hasNextPage}
            />
          </div>
        )}
        {loading && localStorage.getItem('token') && <div>Carregando...</div>}
        {error && localStorage.getItem('token') && <div>Error: {error.message}</div>}
      </div>
    </div>
  );
};

export default UsersListPage;
