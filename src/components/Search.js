import "../styles/Search.scss";

import Input from "./Input";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";

const Search = () => {
  return (
    <div className="search">
      <Input placeholder="Поиск" Icon={SearchIcon} />
      <div className="search__checkbox">
        <input type="checkbox" id="from-back" />
        <label htmlFor="from-back">Через бэкенд</label>
      </div>
    </div>
  );
};

export default Search;
