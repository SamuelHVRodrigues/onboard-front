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
  query Users($limit: Int, $offset: Int) {
    users(data: { limit: $limit, offset: $offset }) {
      nodes {
        id
        name
        email
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        limit
        offset
      }
      count
    }
  }
`;
