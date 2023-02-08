import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { USERS } from './queries';

interface User {
  name: string;
  email: string;
}

const Home = () => {
  const { data } = useQuery(USERS);

  return (
    <div>
      <h1>Home</h1>
      <div>
        {!localStorage.getItem('token') && <Link to='/'>Faça login</Link>}
        {data && (
          <ul>
            {data.users.nodes.map((user: User, index: number) => (
              <li key={index}>
                Name: {user.name} | Email: {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Home;
