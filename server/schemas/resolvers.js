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
    }
}

module.exports = resolvers;