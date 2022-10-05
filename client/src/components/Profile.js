import React from 'react';
import Auth from '../utils/auth';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Projects from '../components/Projects';




const Profile = () => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // const users = data?.user || [];
  console.log(user)

  if (loading) return null;
  // if (error) return `Error! ${error}`;

  return (
    <div>
      <div className="userCard">
        <div className="userProfile">
          <h1>{user.email}</h1>
          <p>My Projects: {user.projects?.name} </p>
          <p>
          </p>
        </div>
      </div>

      <Projects />

    </div>
    );
  };
  export default Profile;