import { Route, Routes } from 'react-router-dom';
import UsersList from './users-list/users-list-page';
import Login from './login/login-page';
import CreateUser from './create-user/create-user-page';

function App() {
  return (
    <Routes>
      <Route element={<Login />} path='/' />
      <Route element={<UsersList />} path='/users-list' />
      <Route element={<CreateUser />} path='/create-user' />
    </Routes>
  );
}

export default App;
