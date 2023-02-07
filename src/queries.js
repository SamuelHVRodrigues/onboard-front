import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
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

export const USERS = gql`
  query Users {
    users {
      nodes {
        name
        email
      }
    }
  }
`;
