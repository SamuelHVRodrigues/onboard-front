import { FC, useState } from 'react';
import { Form, Input, InputRadio, Label, Wrapper } from '../styled';
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
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Label>
          Nome:
          <Input type='text' value={formFields.name} onChange={handleNameChange} />
        </Label>
        <Label>
          Email:
          <Input type='email' value={formFields.email} onChange={handleEmailChange} />
        </Label>
        <Label>
          Senha:
          <Input type='password' value={formFields.password} onChange={handlePasswordChange} />
        </Label>
        <Label>
          Telefone:
          <Input type='tel' value={formFields.phone} onChange={handlePhoneChange} />
        </Label>
        <Label>
          Data de nascimento:
          <Input type='date' value={formFields.birthDate} onChange={handleBirthDateChange} />
        </Label>
        <Label>
          Função:
          <InputRadio type='radio' name='role' id='admin' value={'admin'} onChange={handleRoleChange} />
          <Label htmlFor='admin'>Admin</Label>
          <InputRadio type='radio' name='role' id='user' value={'user'} onChange={handleRoleChange} />
          <Label htmlFor='user'>User</Label>
        </Label>
        <Button text={'Concluir'} loading={props.loading} disabled={props.loading} />
      </Form>
    </Wrapper>
  );
};

export default CreateUserForm;
