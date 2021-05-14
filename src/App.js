import "./styles/App.scss";

import CreateForm from "./components/CreateForm";
import Search from "./components/Search";
import Phonenumbers from "./components/Phonenumbers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPhonenumbers } from "./api/phonebook";
import { setPhonenumbers } from "./redux/reducers/phonenumbers";

const App = () => {
  const { phonenumbers } = useSelector((state) => state.phonenumbers);

  const dispatch = useDispatch();

  useEffect(() => {
    const updatePhonenumbers = async () => {
      const _phonenumbers = await getPhonenumbers();
      dispatch(setPhonenumbers(_phonenumbers.reverse()));
    };

    !phonenumbers && updatePhonenumbers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phonenumbers]);

  return (
    <div className="container">
      <header className="header">
        <CreateForm />
        <Search />
      </header>
      <main className="main">
        <Phonenumbers />
      </main>
    </div>
  );
};

export default App;
