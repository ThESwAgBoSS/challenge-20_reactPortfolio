import React from 'react';

function Project({ title, imageUrl, deployedUrl, repoUrl }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
      <p><a href={deployedUrl}>Live Site</a> | <a href={repoUrl}>GitHub Repo</a></p>
    </div>
  );
}

export default Project;