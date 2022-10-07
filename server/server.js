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
