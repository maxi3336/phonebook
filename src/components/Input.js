import "../styles/Input.scss";

import { ReactComponent as SuccessIcon } from "../assets/icons/success.svg";
import { ReactComponent as ErrorIcon } from "../assets/icons/error.svg";

const Input = ({ isSuccess, isError, Icon, ...props }) => {
  const StatusIcon = isSuccess ? SuccessIcon : isError ? ErrorIcon : null;

  return (
    <div
      className={`input ${
        isSuccess ? "input--success" : isError ? "input--error" : ""
      }`}
    >
      {Icon ? (
        <div className="input__icon">
          <Icon />
        </div>
      ) : null}

      <input type="text" className="input__body" {...props} />
      {StatusIcon ? (
        <div className="input__status">
          <StatusIcon />
        </div>
      ) : null}
    </div>
  );
};

export default Input;
