import "../styles/Phonenumbers.scss";

import { useSelector } from "react-redux";
import Scrollbars from "react-custom-scrollbars";
import PhonenumberItem from "./PhonenumberItem";

const Phonenumbers = () => {
  const { phonenumbers } = useSelector((state) => state.phonenumbers);

  return (
    <div className="phonenumbers-container">
      <Scrollbars>
        <div className="phonenumbers">
          {phonenumbers
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
