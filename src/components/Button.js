import "../styles/Button.scss";

import { ReactComponent as SuccessIcon } from "../assets/icons/success.svg";
import { ReactComponent as ErrorIcon } from "../assets/icons/error.svg";
import { ReactComponent as LoadingIcon } from "../assets/icons/loading.svg";

const Button = ({
  title,
  Icon,
  isSuccess,
  isError,
  isDisabled,
  isLoading,
  ...props
}) => {
  const StatusIcon = isSuccess ? SuccessIcon : isError ? ErrorIcon : null;

  return (
    <button
      className={`button ${
        isSuccess ? "button--success" : isError ? "button--error" : ""
      } ${isDisabled ? "button--disabled" : ""} ${
        isLoading ? "button--loading" : ""
      }`}
      {...props}
    >
      {isLoading ? <LoadingIcon /> : null}
      {!StatusIcon && Icon && !isLoading ? <Icon /> : null}
      {StatusIcon && !isLoading ? <StatusIcon /> : !isLoading ? title : null}
    </button>
  );
};

export default Button;
