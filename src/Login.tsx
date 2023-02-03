function Login() {
  return (
    <div>
      <h1>Bem-vindo(a) à Taqtile!</h1>
      <form>
        <label>E-mail</label>
        <input type={'email'}></input>
        <label>Senha</label>
        <input type={'password'}></input>
        <button type='submit'>Entrar</button>
      </form>
    </div>
  );
}

export default Login;
