import { useMutation } from '@apollo/client';
import LOGIN from './queries';
import validateLogin from './validators';

function Login() {
  const [login, { data, loading, error }] = useMutation(LOGIN);
  console.log(data);
  console.log(loading);
  console.log(error);

  let cachedLogin = localStorage.getItem('login');
  console.log(cachedLogin);

  return !cachedLogin ? (
    <div>
      <h1>Bem-vindo(a) à Taqtile!</h1>
      <form
        onSubmit={async (e: any) => {
          e.preventDefault();
          validateLogin(e);
          try {
            const res = await login({
              variables: { email: e.target.elements.email.value, password: e.target.elements.password.value },
            });
            localStorage.setItem('login', JSON.stringify(res.data.login));
            cachedLogin = localStorage.getItem('login');
          } catch (e) {
            console.log('error');
            alert(e);
          }
        }}
      >
        <label>E-mail</label>
        <input name='email' type={'email'}></input>
        <label>Senha</label>
        <input name='password' type={'password'}></input>
        <button type='submit'>Entrar</button>
      </form>
    </div>
  ) : (
    <div>Olá {JSON.parse(cachedLogin).user.name}</div>
  );
}

export default Login;
