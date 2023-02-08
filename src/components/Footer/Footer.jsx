import './style.css';

import linkedIn from '../../img/icons/linkedIn.svg';
import telegram from '../../img/icons/tel-1.svg';
import gitHub from '../../img/icons/gitHub.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a
                href="https://t.me/Alexpalamar_chuk"
                target="_blank"
                rel="noreferrer"
              >
                <img src={telegram} alt="Link" />
              </a>
            </li>

            <li className="social__item">
              <a
                href="https://github.com/Oleksandr14"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/oleksandr-palamarchuk-4a0749250/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2022 created by me</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
