import Scrollbars from "react-custom-scrollbars";
import { useSelector } from "react-redux";
import "../styles/Phonenumbers.scss";
import PhonenumberItem from "./PhonenumberItem";

const Phonenumbers = () => {
  const { phonenumbers, searchedPhonenumbers } = useSelector(
    (state) => state.phonenumbers
  );

  return (
    <div className="phonenumbers-container">
      <Scrollbars>
        <div className="phonenumbers">
          {phonenumbers && !searchedPhonenumbers
            ? phonenumbers.map((phonenumber) => (
                <PhonenumberItem
                  key={phonenumber._id}
                  phonenumber={phonenumber}
                />
              ))
            : searchedPhonenumbers
            ? phonenumbers.map((phonenumber) => (
                <PhonenumberItem
                  key={phonenumber._id}
                  phonenumber={phonenumber}
                />
              ))
            : null}
        </div>
      </Scrollbars>
    </div>
  );
};

export default Phonenumbers;
