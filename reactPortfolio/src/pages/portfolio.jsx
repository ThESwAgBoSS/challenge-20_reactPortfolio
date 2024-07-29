import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    // Array of project details
  ];

  return (
    <section>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
}

export default Portfolio;