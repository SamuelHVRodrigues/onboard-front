import { gql } from '@apollo/client';

const LOGIN = gql`
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

export default LOGIN;
