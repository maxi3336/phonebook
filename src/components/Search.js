import "../styles/Search.scss";

import Input from "./Input";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import { setPhonenumbers } from "../redux/reducers/phonenumbers";
import { useDispatch } from "react-redux";
import { getPhonenumbers } from "../api/phonebook";

const Search = () => {
  const dispatch = useDispatch();

  const searchHandlerBackend = async ({ target }) => {
    const { value } = target;
    const phonenumbers = await getPhonenumbers(value);
    dispatch(setPhonenumbers(phonenumbers.reverse()));
  };

  return (
    <div className="search">
      <Input
        placeholder="Поиск"
        Icon={SearchIcon}
        onChange={searchHandlerBackend}
      />
    </div>
  );
};

export default Search;
