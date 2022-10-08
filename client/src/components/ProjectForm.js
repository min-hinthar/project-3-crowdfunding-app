import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_PROJECT } from '../utils/mutations';

import Auth from '../utils/auth';

const ProjectForm = ({ email }) => {
  const [project, setProject] = useState('');

  const [addProject, { error }] = useMutation(ADD_PROJECT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addProject({
        variables: { 
          email,
          // description, 
          // pledgeGoal, 
          projectManager: Auth.getProfile().data.email},
      });

      setProject('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <h4>Add a Project</h4>
            <input
              placeholder="Add Project Name"
              value={project.name}
              className="form-input w-100"
              onChange={(event) => setProject(event.target.value)}
            />
            <input
              placeholder="Add Project Description"
              value={project.description}
              className="form-input w-100"
              onChange={(event) => setProject(event.target.value)}
            />
            <input
              placeholder="Pledge Goal"
              value={project.pledgeGoal}
              className="form-input w-100"
              onChange={(event) => setProject(event.target.value)}
            />

          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Add Project
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to endorse skills. 
        </p>
      )}
    </div>
  );
};

export default ProjectForm;
