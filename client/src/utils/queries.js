import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query getUser($email: String!) {
    getUser(email: $email) {
      _id
      username
      email
      password
      projects {
        _id
        name
        description
        pledgeGoal
        projectManager{
          _id
        }
        createdAt
        assets {
          _id
          title
          description
          price
          projectAssignment{
            _id
          }
          createdAt
        }
      }
    }
  }
`;

export const QUERY_PROJECTS = gql`
  query getProjects {
    getProjects {
      _id
      name
      description
      pledgeGoal
      projectManager{
        _id
      }
      createdAt
      assets {
        _id
        title
        description
        price
        projectAssignment{
          _id
        }
        createdAt
      }
    }
  }
`;

export const QUERY_SINGLE_PROJECT = gql`
  query getSingleProject($projectId: ID!) {
    getSingleProject(projectId: $projectId) {
      _id
      name
      description
      pledgeGoal
      projectManager{
        _id
      }
      createdAt
      assets {
        _id
        title
        description
        price
        projectAssignment{
          _id
        }
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      projects {
        _id
        name
        description
        pledgeGoal
        projectManager{
          _id
        }
        createdAt
        assets {
          _id
          title
          description
          price
          projectAssignment{
            _id
          }
          createdAt
        }
      }
    }
  }
`;
