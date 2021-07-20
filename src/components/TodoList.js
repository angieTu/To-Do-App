import React, { useContext } from "react";
import TodoContext from "../contexts/TodoContext";
import List from "./primitives/List";
import Todo from "./Todo";
import Container from "./primitives/Container";

const TodoList = () => {
  const { todos, deleteTodo, changeTodoStatus, filterStatusTodo } =
    useContext(TodoContext);

  return (
    <Container className="list-container">
      <List>
        {todos.filter(filterStatusTodo).map((todo, index) => (
          <Todo
            key={index}
            index={index}
            title={todo.title}
            onDelete={deleteTodo}
            status={todo.status}
            onStatusChange={changeTodoStatus}
          ></Todo>
        ))}
      </List>
    </Container>
  );
};

export default TodoList;
