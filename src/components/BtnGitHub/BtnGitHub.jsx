import icon from '../../img/icons/gitHub-black.svg';

const BtnGitHub = ({ link }) => {
  return (
    <a href={link} className="btn-outline" target="_blank" rel="noreferrer">
      <img src={icon} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
