// require path module
const path = require('path');
// require express module
const express = require('express');

// require apollo-server
const { ApolloServer } = require('apollo-server-express');
// import resolvers, typeDefs from schema
const { resolvers, typeDefs } = require('./schemas');
// import authMiddleware from utils
const { authMiddleware } = require('./utils/authenticate');

// import connection/config as db
const db = require('./config/connection');

// PORT env 3001
const PORT = process.env.PORT || 3001;
// use app as express()
const app = express();

// use server as new ApolloServer
const server = new ApolloServer({
    resolvers,
    typeDefs,
    context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if production app.use express redirect to client/build
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../client/build')));
}
// GET route for homepage sendFile index.html from client/build
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// startApolloServer as a new instance of an Apollo Server with GraphQL schema
const startApolloServer = async ( resolvers, typeDefs) => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API Server is now running on PORT ${PORT}`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
};

// call startApolloServer using resolvers and typeDefs to run server on PORT
startApolloServer(resolvers, typeDefs);


// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
import publishableKey from './client/src/.env';
const stripe = require('stripe')(publishableKey);
const express = require('express');

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));