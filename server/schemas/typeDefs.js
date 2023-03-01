export default `#graphql
  type Ping {
    message: String
    timestamp: String
  } 
  type Query {
    ping: Ping
  }
`