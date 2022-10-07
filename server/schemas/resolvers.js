const { AuthenticationError } = require('apollo-server-express');
const { User, Project, Asset } = require('../models');
const { signToken } = require('../utils/authenticate');

const resolvers = {
    Query:{
        getUser: async (parent, {email}) => {
            return User.findOne({email: email}).populate({path: "projects", populate: {path: "projectManager", model: "Project"}});
        },        
        getProjects: async (parent,{}) => {
            return Project.find();
        },
        getSingleProject: async (parent, {projectId}) => {
            return Project.findOne({_id: projectId});
        }
    },
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
        addProject: async (parent, { name, description, pledgeGoal, projectManager }, context) => { //projectManager is never read -- add project is functioning - adding project to mongoDB but project manager is not rendered.
            const project = await Project.create({ name, description, pledgeGoal, projectManager }); // mostly working except for projectManager.
            console.log(project);
            const pUser = 
            await User.findOneAndUpdate( // HELP
                { _id: projectManager }, // check this out - context is not defined
                { $addToSet: { projects: project } },
                {new: true}
            );
            console.log(pUser)
            return project;
        },
        removeProject: async (parent, { projectId }) => {
            // remove assets
            await Asset.deleteMany({projectAssignment: projectId})
            return Project.findOneAndDelete({ _id: projectId });
        },
        addAsset: async (parent, { title, description, price, projectAssignment }, context) => {
            //if (context.user) {
                // add asset to a project
                const asset = await Asset.create({ title, description, price, projectAssignment });
                const project = await Project.findOneAndUpdate(
                    { _id: projectAssignment },
                    {
                        $addToSet: {
                            assets: asset,
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );

                return project;
            //}
            //throw new AuthenticationError('You need to be logged in!');
        },
        removeAsset: async (parent, { projectId, assetId }, context) => {
            if (context.User) {
                await Asset.findOneAndDelete({_id: assetId})
                return Project.findOneAndUpdate(
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