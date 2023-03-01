import { gql } from '@apollo/client'

export const QUERY_PING = gql`
  query {
    ping {
      message
      timestamp
    }
  }
`