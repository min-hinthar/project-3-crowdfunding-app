import React from 'react';

import { useQuery } from '@apollo/client';

import Projects from '../components/Projects';
import SingleProject from '../components/SingleProject';

import { QUERY_USER } from '../utils/queries';

import Auth from '../utils/auth';


const Profile = () => {
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { email: Auth.getProfile().data.email },
  });

  if (loading) return 'Loading...';
  const user = data?.getUser || [];

  console.log(data)


  return (
    <div>
      <div className="profileContainer">
        <h2 className="profileCard">
          Viewing {user.email} profile.
        </h2>
        <p><SingleProject /></p>
      
          <div><Projects /></div>

      </div>
    </div>
  );
};

export default Profile;
