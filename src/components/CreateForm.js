import "../styles/CreateForm.scss";
import Button from "./Button";
import Input from "./Input";

const CreateForm = () => {
  return (
    <form className="create-form">
      <Input placeholder="Имя" isSuccess />
      <Input placeholder="Номер" isError />
      <Button title="Добавить" type="submit" />
    </form>
  );
};

export default CreateForm;
