import { gql } from '@apollo/client';

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      token
      user {
        id
        name
        email
        birthDate
        phone
        role
      }
    }
  }
`;

export default LOGIN_MUTATION;
