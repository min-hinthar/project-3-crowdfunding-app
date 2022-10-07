import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_PROJECT } from '../utils/queries';

import Auth from '../utils/auth';


const SingleProject = () => {
  const { projectId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROJECT, {
    variables : { projectId: projectId }
  })

  console.log(data)

  if (loading) return 'Loading...';
  const project = data?.getSingleProject || [];
  


  return (
    <div>
      <div className="profileContainer">
        <h2 className="profileCard">{project.name}</h2>
      


      </div>
    </div>
  );
};

export default SingleProject;
