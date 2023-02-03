import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './login-forms';
import useLogin from './use-login';

function LoginPage() {
  const [validateAndLogin, { token, error }] = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/home');
    }
    if (token) {
      localStorage.setItem('token', token);
      navigate('/home');
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
