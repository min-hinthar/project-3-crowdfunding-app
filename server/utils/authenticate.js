// require JWT module
const jwt = require('jsonwebtoken');
// use secret
const secret = 'ultra$ecure$alty$ecret!@#';
// set token expiration
const expiration = '1hr';

module.exports = {
    signToken: function ({ email, username, _id }) {
        const payload = { email, username, _id };
        return jwt.sign ({ data: payload}, secret, { expiresIn: expiration});
    },
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }
        if (!token) {
            return req;
        }
        try{
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Token is Invalid!');
        }
        return req;
    }
};

