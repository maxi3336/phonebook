import { useState } from "react";
import { postPhonenumber } from "../api/phonebook";
import "../styles/CreateForm.scss";
import Button from "./Button";
import Input from "./Input";

const CreateForm = () => {
  const [person, setPerson] = useState({});
  const [number, setNumber] = useState("");
  const [errors, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const inputHandler = ({ target }) => {
    const { name, value } = target;

    setError((prev) => ({ ...prev, [name]: false }));

    if (name === "number") {
      const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      const _number = value.split(" ")[1];

      if (!phoneno.test(_number))
        setError((prev) => ({ ...prev, [name]: true }));

      setNumber(_number);
      setPerson((prev) => ({ ...prev, [name]: value }));
    }

    if (!value) setError((prev) => ({ ...prev, [name]: true }));

    setPerson((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const body = {
      name: person.name,
      phonenumber: person.number.split(" ").join(""),
    };

    //TODO: Проверка на дубликаты через redux

    const response = await postPhonenumber(body);

    if (response.status === 200) {
      /* setToRedux from response.data*/

      setIsSuccess(true);

      setTimeout(() => {
        setPerson({});
        setNumber("");
        setIsSuccess(false);
      }, 1000);
    } else {
      setIsError(true);

      setTimeout(() => {
        setIsError(false);
      }, 1000);
    }

    setIsLoading(false);
  };

  return (
    <form className="create-form" onSubmit={submitHandler}>
      <Input
        name="name"
        placeholder="Имя"
        onChange={inputHandler}
        value={person.name ?? ""}
        isError={errors.name}
      />
      <Input
        name="number"
        placeholder="Номер"
        type="phone"
        value={`+7 ${number ?? ""}`}
        onChange={inputHandler}
        isError={errors.number}
      />
      <Button
        title="Добавить"
        type="submit"
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        isDisabled={
          !person.name || !person.number || errors.number || errors.name
        }
      />
    </form>
  );
};

export default CreateForm;
