import styled from "styled-components";

export const InputForm = styled.input`
  width: 451px;
  height: 36px;
  border-radius: 5px;
  margin: 20px 10px 10px 60px;
`;

const ButtonForm = styled.button`
  height: 30px;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 15px;
`;

interface NewTodoFormProps {
  value: string;
  updateText: (str: string) => void;
  handleAction: () => void;
}

const NewTodoForm: React.FC<NewTodoFormProps> = ({
  value,
  updateText,
  handleAction,
}) => {
  return (
    <div>
      <h2>TypeScript Todo</h2>
      <InputForm
        placeholder="Введите задачу"
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <ButtonForm onClick={handleAction}>Add todo</ButtonForm>
    </div>
  );
};

export default NewTodoForm;
