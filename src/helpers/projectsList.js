import project01 from '../img/projects/filmoteka.jpg';
import project01Big from '../img/projects/filmoteka.jpg';
import project02 from '../img/projects/ice-cream.jpg';
import project02Big from '../img/projects/ice-cream.jpg';
import project03 from '../img/projects/portfolio.jpg';
import project03Big from '../img/projects/portfolio.jpg';

const projects = [
  {
    id: 1,
    title: 'Filmoteka',
    skills: 'HTML, SASS, JS, REST API, Firebase, Parcel',
    img: project01,
    imgBig: project01Big,
    gitHubLink: 'https://github.com/vladmw5/the-gentlemen-project',
  },
  {
    id: 2,
    title: 'IceCream',
    skills: 'HTML, SASS, JS, Parcel',
    img: project02,
    imgBig: project02Big,
    gitHubLink: 'https://github.com/VovaRubakha/team-project',
  },
  {
    id: 3,
    title: 'WebStudio',
    skills: 'HTML, SASS, JS, Parcel',
    img: project03,
    imgBig: project03Big,
    gitHubLink: 'https://oleksandr14.github.io/goit-markup-hw-08/',
  },
];

export { projects };
