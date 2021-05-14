import "../../styles/Modals.scss";

import Button from "../Button";
import { Portal } from "react-portal";
import { deletePhonenumber } from "../../api/phonebook";
import { useState } from "react";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

export const DeleteModal = ({ phonenumber, close }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteHandler = async () => {
    setIsDeleting(true);
    const response = await deletePhonenumber(phonenumber._id);
    if (response.status === 200) close();
  };

  return (
    <Portal>
      <div className="modal modal--delete">
        <div className="modal__body" style={{ width: 500 }}>
          <div className="modal__header">
            <h1>Вы уверены, что хотите удалить номер:</h1>
            <CloseIcon onClick={close} />
          </div>
          <div className="modal__content">
            <span>
              {phonenumber.name}: {phonenumber.phonenumber} ?
            </span>
          </div>
          <div className="modal__submit">
            <Button
              isLoading={isDeleting}
              title="Да"
              onClick={() => deleteHandler(phonenumber._id)}
            />
            <Button isLoading={isDeleting} title="Нет" onClick={close} />
          </div>
        </div>
      </div>
    </Portal>
  );
};
