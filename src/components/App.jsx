import '../styles/main.css';

import Navbar from '../components/Navbar/Navbar';

import Footer from './Footer/Footer';
// import Home from 'pages/Home';
import Projects from 'pages/Projects';
// import Contacts from 'pages/Contacts';

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Projects />
      {/* <Contacts /> */}
      <Footer />
    </div>
  );
};
