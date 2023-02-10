import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
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

export const CREATE_USER_MUTATION = gql`
  mutation CreateUser($data: UserInput!) {
    createUser(data: $data) {
      name
      email
      phone
      birthDate
      role
    }
  }
`;

export const GET_USER_DETAILS = gql`
  query User($userId: ID) {
    user(id: $userId) {
      id
      name
      email
      phone
      birthDate
      role
    }
  }
`;
