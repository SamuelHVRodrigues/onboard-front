import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './login-form';
import useLogin from './use-login';

function LoginPage() {
  const [validateAndLogin, { token, error }] = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/users-list');
    }
    if (token) {
      localStorage.setItem('token', token);
      navigate('/users-list');
    }
  }, [token]);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  return (
    <div>
      <h1>Bem-vindo(a) à Taqtile!</h1>
      <LoginForm validateAndLogin={validateAndLogin} />
    </div>
  );
}

export default LoginPage;
