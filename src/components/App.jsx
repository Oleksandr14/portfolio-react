import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';

import '../styles/main.css';

const Home = lazy(() => import('../pages/Home'));
const Projects = lazy(() => import('../pages/Projects'));
const ProjectDetails = lazy(() => import('../pages/ProjectDetails'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
};
