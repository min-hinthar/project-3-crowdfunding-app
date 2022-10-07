import React from 'react';
import Auth from '../utils/auth';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Projects from './Projects';


// import checkout form for Stripe
import CheckoutForm from './CheckoutForm';

// importing Stripe React elements modules
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import publishableKey from '../.env';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(publishableKey);


const Profile = () => {
  const { email: userParam } = useParams();
  console.log(userParam);
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME);

  const user = data?.me || data?.user || {};

  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };

  // const users = data?.user || [];
  if (!loading)
    console.log(data)

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
      <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
    </div>
    );
  };
  export default Profile;