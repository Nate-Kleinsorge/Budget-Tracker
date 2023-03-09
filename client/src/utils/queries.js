import { gql } from '@apollo/client'

export const QUERY_PING = gql`
  query {
    ping {
      message
      timestamp
    }
  }
`
export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      email
    }
  }
`;