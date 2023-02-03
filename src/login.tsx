import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LOGIN from './queries';
import validateLogin from './validators';

function LoginScreen() {
  const [validateAndLogin, { data, error }] = useLogin();

  useEffect(() => {
    if (data) {
      localStorage.setItem('token', JSON.stringify(data.login.token));
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const cachedLogin = localStorage.getItem('token');

  return !data?.login.token && !cachedLogin ? (
    <div>
      <h1>Bem-vindo(a) à Taqtile!</h1>
      <Link to='/home'>Home</Link>
      <form onSubmit={(e) => validateAndLogin(e)}>
        <label>E-mail</label>
        <input name='email' type={'email'}></input>
        <label>Senha</label>
        <input name='password' type={'password'}></input>
        <button type='submit'>Entrar</button>
      </form>
    </div>
  ) : (
    <div>
      <div>Olá</div>
      <Link to='/home'>Home</Link>
    </div>
  );
}

function useLogin(): Array<any> {
  const [login, { data, loading, error }] = useMutation(LOGIN);

  function validateAndLogin(e: any) {
    e.preventDefault();
    validateLogin(e);
    login({
      variables: { email: e.target.elements.email.value, password: e.target.elements.password.value },
    });
  }

  return [validateAndLogin, { data, loading, error }];
}

export default LoginScreen;
