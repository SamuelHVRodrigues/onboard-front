import { Link } from 'react-router-dom';

const users = [
  { name: 'usuario1', email: 'usuario1@email.com' },
  { name: 'usuario2', email: 'usuario2@email.com' },
  { name: 'usuario3', email: 'usuario3@email.com' },
  { name: 'usuario4', email: 'usuario4@email.com' },
  { name: 'usuario5', email: 'usuario5@email.com' },
  { name: 'usuario6', email: 'usuario6@email.com' },
  { name: 'usuario7', email: 'usuario7@email.com' },
  { name: 'usuario8', email: 'usuario8@email.com' },
  { name: 'usuario9', email: 'usuario9@email.com' },
  { name: 'usuario10', email: 'usuario10@email.com' },
];

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {users.map((user) => (
          <li>
            Nome: {user.name} | Email: {user.email}
          </li>
        ))}
      </ul>
      <Link to='/'>Voltar</Link>
    </div>
  );
};

export default Home;
