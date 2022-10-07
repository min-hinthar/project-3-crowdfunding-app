import React from 'react';
import { QUERY_PROJECTS } from '../utils/queries';
import { useQuery } from '@apollo/client';



const Projects = () => {
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.projects || [];
  console.log(projects)
  
  
  return (
    <div>
      <h3 className="text-primary">View All Projects</h3>
      <p>{projects}</p>
    </div>
    );
  };
  export default Projects;