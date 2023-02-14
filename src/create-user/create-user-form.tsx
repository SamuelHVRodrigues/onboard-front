import { FC, useState } from 'react';
import Button from '../utils/button';
import { UserInput } from './use-create-user';

interface CreateUserFormProps {
  validateAndCreateUser: (input: UserInput) => void;
  loading: boolean;
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
      ...prev,
      name: event.target.value,
    }));
  };

  const handleEmailChange = (event: { target: { value: string } }) => {
    setFormField((prev) => ({
      ...prev,
      email: event.target.value,
    }));
  };

  const handlePasswordChange = (event: { target: { value: string } }) => {
    setFormField((prev) => ({
      ...prev,
      password: event.target.value,
    }));
  };

  const handlePhoneChange = (event: { target: { value: string } }) => {
    setFormField((prev) => ({
      ...prev,
      phone: event.target.value,
    }));
  };

  const handleBirthDateChange = (event: { target: { value: string } }) => {
    setFormField((prev) => ({
      ...prev,
      birthDate: event.target.value,
    }));
  };

  const handleRoleChange = (event: { target: { value: string } }) => {
    setFormField((prev) => ({
      ...prev,
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
      <Button text={'Concluir'} loading={props.loading} disabled={props.loading} />
    </form>
  );
};

export default CreateUserForm;
