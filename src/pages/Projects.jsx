import Project from 'components/Project/Project';

import { projects } from '../helpers/projectsList';

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map(({ title, skills, img, imgBig, gitHubLink, id }) => {
            return (
              <Project
                key={id}
                id={id}
                title={title}
                skills={skills}
                img={img}
                imgBig={imgBig}
                gitHubLink={gitHubLink}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
