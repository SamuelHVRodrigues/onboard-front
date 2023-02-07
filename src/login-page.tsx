import { useEffect } from 'react';
import LoginForm from './login-forms';
import useLogin from './use-login';

function LoginPage() {
  const [validateAndLogin, { token, error }] = useLogin();

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    }
  }, [token]);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const isConnected = token ?? localStorage.getItem('token');

  return isConnected ? (
    <div>Olá</div>
  ) : (
    <div>
      <h1>Bem-vindo(a) à Taqtile!</h1>
      <LoginForm validateAndLogin={validateAndLogin} />
    </div>
  );
}

export default LoginPage;
