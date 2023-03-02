const typeDefs =  `#graphql

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

  type Query {
    users: [User]!
    user(userId: ID!): User
  }

  type Mutation {
    addUser(email: String!, password: String!): User
    addUserData(userId: ID!, monthIncome: String!, houseCost: String, groceryCost: String, gasCost: String, streamCost: String, otherCost: String): User
  }
`
export default typeDefs;