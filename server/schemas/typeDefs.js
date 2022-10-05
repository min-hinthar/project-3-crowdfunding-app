const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Project {
    _id: ID
    name: String
    description: String
    pledgeGoal: Int
    projectManager: User
    createdAt: String 
    assets: [Asset]!
  }
  type User {
    _id: ID
    username: String
    email: String
    password: String
    projects: [Project]!
    assets: [Asset]!
  }
  type Asset {
    _id: ID
    title: String
    description: String
    price: Int
    projectAssignment: Project
    createdAt: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    getUser(email: String!): User
    projects: [Project]
    project(projectId: ID!): Project
    getProjects:[Project]
    getSingleProject(projectId: ID!): Project
}

  type Mutation {
    # Set up mutations to handle creating a profile or logging into a profile and return Auth type
    addUser (username: String!, email: String!, password: String!): Auth
    addAsset (title: String!, description: String!, price: Int!, projectAssignment: String!, createdAt: String): Asset
    addProject(name: String!, description: String!, projectManager: String!, pledgeGoal: Int!): Project
    login(email: String!, password: String!): Auth
    removeProject(projectId: ID!): Project
    removeAsset(assetId: ID!): Asset
  }
`;

module.exports = typeDefs;
