// import PropTypes from "prop-types";
// import css from "./SearchBox.module.css";

// const SearchBox = ({ dataSearh, setDataSearch }) => {
//   const handleChange = (evt) => {
//     setDataSearch(evt.target.value);
//   };

//   return (
//     <div className={css.search_box_field}>
//       <p>Find contacts by name</p>
//       <input
//         type="text"
//         value={dataSearh}
//         onChange={handleChange}
//         className={css.search_box_field}
//       />
//     </div>
//   );
// };

// SearchBox.propTypes = {
//   dataSearh: PropTypes.string,
//   setDataSearch: PropTypes.func,
// };

// export default SearchBox;

// import PropTypes from "prop-types";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
// import { selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
    // console.log(evt.target.value);
  };

  return (
    <div className={css.search_box_field}>
      <p>Find contacts by name</p>
      <input
        type="text"
        // value={""}
        onChange={handleChange}
        className={css.search_box_field}
      />
    </div>
  );
};

// SearchBox.propTypes = {
//   dataSearh: PropTypes.string,
//   setDataSearch: PropTypes.func,
// };

export default SearchBox;
