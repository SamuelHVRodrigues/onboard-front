import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Login from './login';

function App() {
  return (
    <Routes>
      <Route element={<Login />} path='/' />
      <Route element={<Home />} path='/home' />
    </Routes>
  );
}

export default App;
