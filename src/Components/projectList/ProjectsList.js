import React from 'react';
import ProjectCard from '../projectCard/ProjectCard'
import './projectList.css';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
