import React from 'react';
import Auth from '../utils/auth';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS } from '../utils/queries';




const Projects = () => {
//   const { username: userParam } = useParams();
  const { loading, data } = useQuery(QUERY_PROJECTS);

  const projects = data?.projects || {};

  // const users = data?.user || [];
  console.log(projects)

  if (loading) return null;
  // if (error) return `Error! ${error}`;

  return (
    <div>
      <div className="projectCard">
        <div className="projectProfile">
          <p>View All Projects: {projects?.name} </p>
          <p>
          </p>
        </div>
      </div>
      

    </div>
    );
  };
  export default Projects;