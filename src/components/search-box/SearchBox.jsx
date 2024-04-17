import PropTypes from "prop-types";
import css from "./SearchBox.module.css";

const SearchBox = ({ dataSearh, setDataSearch }) => {
  const handleChange = (evt) => {
    setDataSearch(evt.target.value);
  };

  return (
    <div className={css.search_box_field}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={dataSearh}
        onChange={handleChange}
        className={css.search_box_field}
      />
    </div>
  );
};

SearchBox.propTypes = {
  dataSearh: PropTypes.string,
  setDataSearch: PropTypes.func,
};

export default SearchBox;
