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
      email
    }
  }
`
export const ADD_USER = gql`
query user($firstName: String! , $lastName: String!, $email: String!, $password: String!) {
user(email: $email , password: $password, firstName: $firstName , lastName:$lastName) {
  email
  password
  firstName
  lastName
}} `