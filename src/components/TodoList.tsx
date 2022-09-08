import { useAppSelector } from "../hook";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import { useEffect, useState } from "react";

export const TodoListCss = styled.div``;

const StatusBtn = styled.button`
  height: 30px;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 15px;
  margin: 10px 10px 10px 0px;
  background-color: grey;
  border: none;
  color: white;
  :hover {
    cursor: pointer;
  }
`;

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos.list);
  const [filtered, setFiltered] = useState(todos);

  function todoFilter(completed: any) {
    if (completed === "all") {
      setFiltered(todos);
    } else {
      const newTodo = [...todos].filter((item) => item.completed === completed);
      setFiltered(newTodo);
    }
  }

  useEffect(() => {
    setFiltered(todos);
  }, [todos]);

  return (
    <TodoListCss>
      <h3>Task(s) {todos.length}</h3>
      <StatusBtn onClick={() => todoFilter("all")}>Все</StatusBtn>
      <StatusBtn onClick={() => todoFilter(true)}>Выполненые</StatusBtn>
      <StatusBtn onClick={() => todoFilter(false)}>Невыполненные</StatusBtn>

      {filtered.map((todos) => (
        <TodoItem key={todos.id} {...todos} />
      ))}
    </TodoListCss>
  );
};

export default TodoList;
