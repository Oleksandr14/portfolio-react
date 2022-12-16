import { HiSearch } from 'react-icons/hi';
import './style.css';

const SearchBox = ({ onChange, value }) => {
  return (
    <div className="wrapper">
      <HiSearch className="search-icon" />
      <input
        type="text"
        value={value}
        className="input"
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
