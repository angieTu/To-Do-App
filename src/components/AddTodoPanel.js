import React, { useContext } from "react";
import Button from "./primitives/Button";
import Input from "./primitives/Input";
import TodoContext from "../contexts/TodoContext";
import Container from "./primitives/Container";

const AddTodoPanel = () => {
  const { todo, addTodo, setTodo } = useContext(TodoContext);

  const handleAddTodoKeyDown = (event) => {
    if (event.keyCode === 13 && event.target.value !== "") {
      addTodo();
      setTodo("");
    }
  };

  const handleAddTodoButtonClick = () => {
    if (todo !== "") {
      addTodo();
      setTodo("");
    }
  };

  const handleTodoChange = (event) => setTodo(event.target.value);

  return (
    <Container className="add-container">
      <Input
        type="text"
        placeholder="Ingrese nuevo To Do"
        value={todo}
        onKeyDown={handleAddTodoKeyDown}
        onChange={handleTodoChange}
      />
      <Button onClick={handleAddTodoButtonClick}>Agregar</Button>
    </Container>
  );
};

export default AddTodoPanel;
