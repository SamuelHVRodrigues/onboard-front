import { ApolloError, useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../queries';
import validateEmail from '../validators/validate-email';
import validatePassword from '../validators/validate-password';

type UseLoginReturn = [
  (input: { email: string; password: string }) => void,
  { token: string; loading: boolean; error: ApolloError | undefined },
];

function useLogin(): UseLoginReturn {
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  function validateAndLogin(input: { email: string; password: string }) {
    validateEmail(input.email);
    validatePassword(input.password);
    login({ variables: { data: { email: input.email, password: input.password } } });
  }

  return [validateAndLogin, { token: data?.login.token, loading, error }];
}

export default useLogin;
