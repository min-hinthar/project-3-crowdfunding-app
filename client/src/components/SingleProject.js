import React from 'react';

// Import the `useParams()` hook
import { useQuery } from '@apollo/client';

import { QUERY_USER } from '../utils/queries';

import Auth from '../utils/auth';


const SingleProject = () => {
  const { loading, data } = useQuery(QUERY_USER,
    {
      variables: { email : Auth.getProfile().data.email},
    }
  );

  if (loading) return 'Loading...';

  console.log(data)
  const project = data?.getUser || {};

  return (
    <div>
      <div className="profileContainer">
        <h2 className="profileCard">{project.name}</h2>
      
      {/* ADD_PROJECT */}
      {/* UPDATE_PROJECT */}
      {/* REMOVE_PROJECT */}


      </div>
    </div>
  );
};

export default SingleProject;
