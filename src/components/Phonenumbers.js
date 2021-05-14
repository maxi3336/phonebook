import { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { getPhonenumbers } from "../api/phonebook";
import "../styles/Phonenumbers.scss";
import PhonenumberItem from "./PhonenumberItem";

const Phonenumbers = () => {
  const [phonenumbers, setPhonenumbers] = useState();

  useEffect(() => {
    const updatePhonenumbers = async () => {
      const _phonenumbers = await getPhonenumbers();
      setPhonenumbers(_phonenumbers);
    };

    !phonenumbers && updatePhonenumbers();
  }, [phonenumbers]);

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
