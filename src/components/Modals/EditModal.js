import "../../styles/Modals.scss";

import { Portal } from "react-portal";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import Button from "../Button";
import Input from "../Input";
import { useState } from "react";
import { putPhonenumber } from "../../api/phonebook";

export const EditModal = ({ phonenumber, close }) => {
  const [currentPhonenumber, setCurrentPhonenumber] = useState(
    phonenumber ?? {}
  );
  const [number, setNumber] = useState(
    phonenumber?.phonenumber?.substring(2) ?? ""
  );
  const [errors, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const inputHandler = ({ target }) => {
    const { name, value } = target;

    isError && setIsError(false);

    setError((prev) => ({ ...prev, [name]: false }));

    if (name === "phonenumber") {
      const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      const _number = value.split(" ")[1];

      if (!phoneno.test(_number))
        setError((prev) => ({ ...prev, [name]: true }));

      setNumber(_number);
      setCurrentPhonenumber((prev) => ({ ...prev, [name]: value }));
    }

    if (!value) setError((prev) => ({ ...prev, [name]: true }));

    setCurrentPhonenumber((prev) => ({ ...prev, [name]: value }));
  };

  const updateHandler = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const body = {
      name: currentPhonenumber.name,
      phonenumber: currentPhonenumber.phonenumber.split(" ").join(""),
    };

    const response = await putPhonenumber(phonenumber._id, body);
    setIsLoading(false);

    if (response.status === 200) {
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
        close();
      }, 1000);
    } else {
      setIsError(true);
    }
  };

  return (
    <Portal>
      <div className="modal modal--edit">
        <form className="modal__body" onSubmit={updateHandler}>
          <div className="modal__header">
            <h1>Редактирование {phonenumber.name}</h1>
            <CloseIcon onClick={close} />
          </div>
          <div className="modal__content">
            <Input
              onChange={inputHandler}
              name="name"
              value={currentPhonenumber.name}
              placeholder="Имя"
              isError={errors.name}
            />
            <Input
              onChange={inputHandler}
              name="phonenumber"
              value={`+7 ${number ?? ""}`}
              placeholder="Номер"
              isError={errors.phonenumber}
            />
          </div>
          <div className="modal__submit">
            <Button
              title="Сохранить"
              isError={isError}
              isSuccess={isSuccess}
              isLoading={isLoading}
              isDisabled={
                !currentPhonenumber.name ||
                !currentPhonenumber.phonenumber ||
                errors.phonenumber ||
                errors.name
              }
              type="submit"
            />
            <Button title="Отмена" type="button" onClick={close} />
          </div>
        </form>
      </div>
    </Portal>
  );
};
