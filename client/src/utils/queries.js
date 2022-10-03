import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      password
      projects {
        _id
        name
        description
        pledgeGoal
        projectManager
        createdAt
        Assets {
          _id
          title
          description
          price
          projectAssignment
          createdAt
        }
      }
    }
  }
`;

export const QUERY_PROJECTS = gql`
  query getProjects {
    projects {
      _id
      name
      description
      pledgeGoal
      projectManager
      createdAt
      assets {
        _id
        title
        description
        price
        projectAssignment
        createdAt
      }
    }
  }
`;

export const QUERY_SINGLE_PROJECT = gql`
  query getSingleProject($projectId: ID!) {
    project(projectId: $projectId) {
      _id
      name
      description
      pledgeGoal
      projectManager
      createdAt
      assets {
        _id
        title
        description
        price
        projectAssignment
        createdAt
      }
    }
  }
`;
