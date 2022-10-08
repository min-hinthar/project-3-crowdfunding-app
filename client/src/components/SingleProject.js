import React from 'react';

// Import the `useParams()` hook
import { useMutation, useQuery } from '@apollo/client';

import { QUERY_USER } from '../utils/queries';
import { REMOVE_PROJECT } from '../utils/mutations';

import Auth from '../utils/auth';


const SingleProject = () => {
  const { loading, data } = useQuery(QUERY_USER,
    {
      variables: { email: Auth.getProfile().data.email },
    }
  );
  if (loading) return 'Loading...';
  const user = data?.getUser || {};

  // const [projectRemove] = useMutation(REMOVE_PROJECT);
  // const removeProject = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   projectRemove({
  //     variables: {
  //       projectId: { _eq: $projectId },
  //     }
  //   });
  // };


  return (
    <div>
      <div className="profileContainer">
        <h2 className="profileCard">My Projects</h2>
        <button 
          // onSubmit={handleFormSubmit}
          className="btn btn-block btn-primary"
          style={{ cursor: 'pointer' }}
          type="submit"
        >
          Edit Project
        </button>
        <button 
          // onSubmit={handleFormSubmit}
          className="btn btn-block btn-primary"
          style={{ cursor: 'pointer' }}
          type="submit"
        >
          Delete Project
        </button>
        {user.projects.map((p, item) => (
          <div key={item}>
            <h3>Project Name: {p.name}</h3>
            <p>Description: {p.description}</p>
            <p>Pledge Goal: ${p.pledgeGoal}</p>
          </div>
        ))}


        {/* ADD_PROJECT */}
        {/* UPDATE_PROJECT */}
        {/* REMOVE_PROJECT */}


      </div>
    </div>
  );
};

export default SingleProject;
