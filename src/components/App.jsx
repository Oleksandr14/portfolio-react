import '../styles/main.css';
import { Routes, Route } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'pages/Home';
import Projects from 'pages/Projects';
import ProjectDetails from 'pages/ProjectDetails';
import Contacts from 'pages/Contacts';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
};
