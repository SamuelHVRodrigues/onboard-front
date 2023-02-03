import ValidateLogin from './validators';

function Login() {
  return (
    <div>
      <h1>Bem-vindo(a) à Taqtile!</h1>
      <form onSubmit={ValidateLogin}>
        <label>E-mail</label>
        <input name='email' type={'email'}></input>
        <label>Senha</label>
        <input name='password' type={'password'}></input>
        <button type='submit'>Entrar</button>
      </form>
    </div>
  );
}

export default Login;
