import React from 'react';
import { QUERY_PROJECTS } from '../utils/queries';
import { useQuery } from '@apollo/client';


const Projects = () => {
  const { loading, data } = useQuery(QUERY_PROJECTS);
  if (loading) return 'Loading...';

  console.log(data)

  const projects = data?.getProjects || [];

  return (
    <div>
      <div>
        <h3 className="text-primary">View All Projects</h3>
        <div>
          {projects.map(
            (project) => {
              return (
                <li>
                  {project.name}
                </li>
              );
            }
          )
          }
        </div>
      </div>

    </div>
  );

}

export default Projects;