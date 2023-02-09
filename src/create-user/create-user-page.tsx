import CreateUserForm from './create-user-form';
import useCreateUser from './use-create-user';

function CreateUserPage() {
  const [validataAndCreateUser, { user }] = useCreateUser();

  return (
    <div>
      <h1>Criar usuário</h1>
      <CreateUserForm validateAndCreateUser={validataAndCreateUser} />
      {user && (
        <div>
          <h1>Usuário criado</h1>
          <p>Nome: {user.name}</p>
          <p>E-mail: {user.email}</p>
          <p>Telefone: {user.phone}</p>
          <p>Data de nascimento: {user.birthDate}</p>
          <p>Função: {user.role}</p>
        </div>
      )}
    </div>
  );
}

export default CreateUserPage;
