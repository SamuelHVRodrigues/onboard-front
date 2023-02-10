import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageButton from './pagination-button';
import { USERS } from './queries';

interface User {
  name: string;
  email: string;
}

const LIMIT_OF_USERS_TO_SHOW = 10;

const Home = () => {
  const [getUsers, { data, loading, error }] = useLazyQuery(USERS);

  useEffect(() => {
    getUsers({ variables: { limit: LIMIT_OF_USERS_TO_SHOW, offset: 0 } });
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <div>
        {!localStorage.getItem('token') && <Link to='/'>Faça login</Link>}
        {data && (
          <div>
            <ul>
              {data?.users.nodes.map((user: User, index: number) => (
                <li key={index}>
                  Name: {user.name} | Email: {user.email}
                </li>
              ))}
            </ul>
            <PageButton
              onClick={() =>
                getUsers({
                  variables: {
                    limit: LIMIT_OF_USERS_TO_SHOW,
                    offset: data?.users.pageInfo.offset - LIMIT_OF_USERS_TO_SHOW,
                  },
                })
              }
              type={'previous'}
              loading={loading}
              disabled={!data?.users.pageInfo.hasPreviousPage}
            />
            <PageButton
              onClick={() =>
                getUsers({
                  variables: {
                    limit: LIMIT_OF_USERS_TO_SHOW,
                    offset: data?.users.pageInfo.offset + LIMIT_OF_USERS_TO_SHOW,
                  },
                })
              }
              type={'next'}
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
export default Home;
