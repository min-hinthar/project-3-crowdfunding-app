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
  console.log (data)
  console.log (Auth.getProfile())

  if (loading) return 'Loading...';
  const user = data?.getUser || [];
  


  return (
    <div>
      <div className="profileContainer">
        <h2 className="profileCard">
          Viewing {user.email} profile.
        </h2>
        {/* <p><SingleProject /></p> */}
      

        {/* <Projects /> */}

      </div>
    </div>
  );
};

export default Profile;
