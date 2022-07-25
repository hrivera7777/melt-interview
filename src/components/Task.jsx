import React from "react";

const Task = ({ done, task }) => {
  return (
    <div>
      {console.log(task, "task")}
      <span>{task}</span>
      <span>{done ? "completed" : "pending"}</span>
    </div>
  );
};

export default Task;
