import { FC, useState } from 'react';
import { UserInput } from './use-create-user';

interface CreateUserFormProps {
  validateAndCreateUser: (input: UserInput) => void;
}

const CreateUserForm: FC<CreateUserFormProps> = (props) => {
  const [formFields, setFormField] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    birthDate: '',
    role: '',
  });

  const handleNameChange = (event: { target: { value: string } }) => {
    setFormField((prev) => ({
      name: event.target.value,
      email: prev.email,
      password: prev.password,
      phone: prev.phone,
      birthDate: prev.birthDate,
      role: prev.role,
    }));
  };

  const handleEmailChange = (event: { target: { value: string } }) => {
    setFormField((prev) => ({
      name: prev.name,
      email: event.target.value,
      password: prev.password,
      phone: prev.phone,
      birthDate: prev.birthDate,
      role: prev.role,
    }));
  };

  const handlePasswordChange = (event: { target: { value: string } }) => {
    setFormField((prev) => ({
      name: prev.name,
      email: prev.email,
      password: event.target.value,
      phone: prev.phone,
      birthDate: prev.birthDate,
      role: prev.role,
    }));
  };

  const handlePhoneChange = (event: { target: { value: string } }) => {
    setFormField((prev) => ({
      name: prev.name,
      email: prev.email,
      password: prev.password,
      phone: event.target.value,
      birthDate: prev.birthDate,
      role: prev.role,
    }));
  };

  const handleBirthDateChange = (event: { target: { value: string } }) => {
    setFormField((prev) => ({
      name: prev.name,
      email: prev.email,
      password: prev.password,
      phone: prev.phone,
      birthDate: event.target.value,
      role: prev.role,
    }));
  };

  const handleRoleChange = (event: { target: { value: string } }) => {
    setFormField((prev) => ({
      name: prev.name,
      email: prev.email,
      password: prev.password,
      phone: prev.phone,
      birthDate: prev.birthDate,
      role: event.target.value,
    }));
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.validateAndCreateUser(formFields);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type='text' value={formFields.name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Email:
        <input type='email' value={formFields.email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Senha:
        <input type='password' value={formFields.password} onChange={handlePasswordChange} />
      </label>
      <br />
      <label>
        Telefone:
        <input type='tel' value={formFields.phone} onChange={handlePhoneChange} />
      </label>
      <br />
      <label>
        Data de nascimento:
        <input type='date' value={formFields.birthDate} onChange={handleBirthDateChange} />
      </label>
      <br />
      <label>
        Função:
        <input type='radio' name='role' id='admin' value={'admin'} onChange={handleRoleChange} />
        <label htmlFor='admin'>Admin</label>
        <input type='radio' name='role' id='user' value={'user'} onChange={handleRoleChange} />
        <label htmlFor='user'>User</label>
      </label>
      <br />
      <input type='submit' value='Criar usuário' />
    </form>
  );
};

export default CreateUserForm;
