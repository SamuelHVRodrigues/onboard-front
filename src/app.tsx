import { Route, Routes } from 'react-router-dom';
import UsersList from './users-list/users-list-page';
import Login from './login/login-page';
import CreateUser from './create-user/create-user-page';
import UserDetails from './user-details/user-details-page';

function App() {
  return (
    <Routes>
      <Route element={<Login />} path='/' />
      <Route element={<UsersList />} path='/users-list' />
      <Route element={<CreateUser />} path='/create-user' />
      <Route element={<UserDetails />} path='/user-details' />
    </Routes>
  );
}

export default App;
