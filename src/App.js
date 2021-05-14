import "./styles/App.scss";

import CreateForm from "./components/CreateForm";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <CreateForm />
        <Search />
      </header>
      <main className="main"></main>
    </div>
  );
};

export default App;
