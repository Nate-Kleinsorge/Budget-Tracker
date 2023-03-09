import { gql } from 'apollo-server-express';
const typeDefs =  gql`
  type User {
    _id: ID
    email: String!
    password: String!
    userData: [Data]!
  }

  type Data {
    _id: ID
    monthIncome: String!
    houseCost: String
    groceryCost: String
    gasCost: String
    streamCost: String
    otherCost: String
  }
  type Auth {
    token: ID!
    
  }


  type Query {
    users: [User]!
    user(userId: ID!): User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): User
    addUserData(userId: ID!, monthIncome: String!, houseCost: String, groceryCost: String, gasCost: String, streamCost: String, otherCost: String): User
    login(email: String! , password: String!): Auth
  }
`
export default typeDefs;