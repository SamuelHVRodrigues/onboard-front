import { ApolloError, useMutation } from '@apollo/client';
import { CREATE_USER_MUTATION } from '../queries';
import {
  validateName,
  validateEmail,
  validatePassword,
  validatePhone,
  validateBirthDate,
  validateRole,
} from '../validators';

export interface UserInput {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthDate: string;
  role: string;
}

type UseCreateUserReturn = [
  (input: UserInput) => void,
  {
    user: { name: string; email: string; phone: string; birthDate: string; role: string };
    loading: boolean;
    error: ApolloError | undefined;
  },
];

function useCreateUser(): UseCreateUserReturn {
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER_MUTATION);

  function validateAndCreateUser(input: UserInput) {
    validateName(input.name);
    validateEmail(input.email);
    validatePassword(input.password);
    validatePhone(input.phone);
    validateBirthDate(input.birthDate);
    validateRole(input.role);
    createUser({ variables: { data: input } });
  }

  return [validateAndCreateUser, { user: data?.createUser, loading, error }];
}

export default useCreateUser;
