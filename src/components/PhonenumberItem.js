import "../styles/PhonenumberItem.scss";

import { ReactComponent as EditIcon } from "../assets/icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../assets/icons/delete.svg";
import { useState } from "react";
import { DeleteModal } from "./Modals/DeleteModal";
import { EditModal } from "./Modals/EditModal";

const PhonenumberItem = ({ phonenumber }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="phonenumber-item">
      <div className="phonenumber-item__content">
        <div className="phonenumber-item__name">
          <h3>Имя:</h3>
          <span>{phonenumber.name}</span>
        </div>
        <div className="phonenumber-item__number">
          <h3>Номер:</h3>
          <span>{phonenumber.phonenumber}</span>
        </div>
      </div>
      <div className="phonenumber-item__buttons">
        <div
          className="phonenumber-item__edit"
          onClick={() => setIsEditing(true)}
        >
          <EditIcon />
        </div>
        <div
          className="phonenumber-item__delete"
          onClick={() => setIsDeleting(true)}
        >
          <DeleteIcon />
        </div>
      </div>
      {isDeleting ? (
        <DeleteModal
          phonenumber={phonenumber}
          close={() => setIsDeleting(false)}
        />
      ) : null}
      {isEditing ? (
        <EditModal
          phonenumber={phonenumber}
          close={() => setIsEditing(false)}
        />
      ) : null}
    </div>
  );
};

export default PhonenumberItem;
