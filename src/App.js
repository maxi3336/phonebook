import "./styles/App.scss";

import CreateForm from "./components/CreateForm";
import Search from "./components/Search";
import Phonenumbers from "./components/Phonenumbers";

const App = () => {
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
