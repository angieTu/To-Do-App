import React, { useContext } from "react";
import TodoContext from "../contexts/TodoContext";
import Option from "./primitives/Option";
import Select from "./primitives/Select";

const Filters = () => {
  const { setTodoStatusFilter } = useContext(TodoContext);

  const handleStatusFilterChange = (event) =>
    setTodoStatusFilter(event.target.value);

  return (
    <Select id="select" onChange={handleStatusFilterChange}>
      <Option value="todos">To Do</Option>
      <Option value="pendiente">Pendiente</Option>
      <Option value="completo">Completo</Option>
    </Select>
  );
};

export default Filters;
