const { AuthenticationError } = require('apollo-server-express');
const { User, Project } = require('../models');
const { signToken } = require('../utils/authenticate');

const resolvers = {
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
      
            return { token, user };
          },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('No user with this email found!');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect password!');
            }
      
            const token = signToken(user);
            return { token, user };
          },
          addProject: async (parent, { name, description, pledgeGoal, projectManager }) => {
            const project = await Project.create({ name, description, pledgeGoal, $projectManager: projectManager._id});
            console.log(project);
            await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { projects: project._id } }
              );
            return project;
          },
          removeProject: async (parent, { projectId }) => {
            return Project.findOneAndDelete({ _id: projectId });
          },
        addAsset: async (parent, { projectId, title, description, price, projectAssignment }, context) => {
            if (context.user) {
              return Prjoect.findOneAndUpdate(
                { _id: projectId },
                {
                  $addToSet: {
                    assets: { title, description, price, projectAssignment },
                  },
                },
                {
                  new: true,
                  runValidators: true,
                }
              );
            }
            throw new AuthenticationError('You need to be logged in!');
          },
        removeAsset: async (parent, { projectId, assetId }, context) => {
            if (context.user) {
              return Thought.findOneAndUpdate(
                { _id: projectId },
                {
                  $pull: {
                    assets: {
                      _id: assetId,
                    },
                  },
                },
                { new: true }
              );
            }
            throw new AuthenticationError('You need to be logged in!');
          },
    },
};

module.exports = resolvers;