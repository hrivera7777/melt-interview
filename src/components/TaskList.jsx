import React from "react";
import Task from "./Task";

const TaskList = ({ todos }) => {
  return (
    <>
      {todos.map((todo, index) => (
        <Task key={index} done={todo.done} task={todo.task} />
      ))}
    </>
  );
};

export default TaskList;
