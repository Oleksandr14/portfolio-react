import Header from '../components/Header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                HTML5, CSS3, SASS, Responsive/Adaptive design, GIT, JavaScript,
                React, Webpack Parcel
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">SOFT SKILLS</h2>
              <p>Teamwork, Communication, Willingness to learn, Accurate</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
