import { FC, useState } from 'react';
import Button from '../utils/button';

interface LoginFormProps {
  validateAndLogin: (input: { email: string; password: string }) => void;
  loading: boolean;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const [formFields, setFormField] = useState({ email: '', password: '' });

  const handleEmailChange = (event: { target: { value: string } }) => {
    setFormField((prev) => ({ email: event.target.value, password: prev.password }));
  };

  const handlePasswordChange = (event: { target: { value: string } }) => {
    setFormField((prev) => ({ email: prev.email, password: event.target.value }));
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.validateAndLogin({ email: formFields.email, password: formFields.password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type='email' value={formFields.email} onChange={handleEmailChange} />
      </label>
      <label>
        Password:
        <input type='password' value={formFields.password} onChange={handlePasswordChange} />
      </label>
      <Button text={'Entrar'} loading={props.loading} disabled={props.loading} />
    </form>
  );
};

export default LoginForm;
