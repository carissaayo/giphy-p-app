import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchGiphy } from "../context/giphyContext";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  let dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchValue) return;
    dispatch(fetchSearchGiphy(searchValue));
  };

  return (
    <form className="form-inline justify-content-center m-2">
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder="search"
        className="form-control"
      />
      <button
        onClick={handleSubmit}
        type="submit"
        className="btn btn-primary mx-2"
      >
        Go
      </button>
    </form>
  );
};

export default Search;
