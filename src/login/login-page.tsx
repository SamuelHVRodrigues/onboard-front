import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title, Wrapper } from '../styled';
import LoginForm from './login-form';
import useLogin from './use-login';

function LoginPage() {
  const [validateAndLogin, { token, loading, error }] = useLogin();
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
    <Wrapper>
      <Title>Bem-vindo(a) à Taqtile!</Title>
      <LoginForm validateAndLogin={validateAndLogin} loading={loading} />
    </Wrapper>
  );
}

export default LoginPage;
