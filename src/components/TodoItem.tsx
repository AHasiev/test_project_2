import { useAppDispatch } from "../hook";
import { toggleComplete, removeTodo, addTodo } from "../store/todoSlice";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin-left: 450px;
  align-items: center;
  gap: 2rem;
  margin-top: 10px;
`;

const InputTitle = styled.input`
  :checked+span  {
    opacity: 0.5;
    text-decoration: line-through;
  } ;
`;

const SpanText = styled.span`
  font-size: 17px;
`;

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  return (
    <StyledDiv>
      <InputTitle
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete(id))}
      />
      <SpanText>{title}</SpanText>
      <button onClick={() => dispatch(removeTodo(id))}>X</button>
    </StyledDiv>
  );
};

export default TodoItem;
