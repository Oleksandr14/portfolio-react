import { useSearchParams } from 'react-router-dom';
import Project from 'components/Project/Project';
import SearchBox from 'components/SearchBox/SearchBox';

import { projects } from '../helpers/projectsList';

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const projectName = searchParams.get('project') ?? '';

  const visibleProjects = projects.filter(project =>
    project.title.toLowerCase().includes(projectName.toLowerCase())
  );

  const updateQueryString = name => {
    const nextParams = name !== '' ? { project: name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main className="section">
      <div className="container">
        <SearchBox value={projectName} onChange={updateQueryString} />
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {visibleProjects.map(
            ({ title, skills, img, imgBig, gitHubLink, id }) => {
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
            }
          )}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
