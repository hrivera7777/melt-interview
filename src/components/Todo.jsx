import TaskList from "./TaskList";
import { useState, useRef } from "react";

const Todo = () => {
  const initialTodo = [
    {
      id: Math.floor(Math.random()),
      task: "something",
      done: false,
    },
  ];
  const [todos, setTodos] = useState(initialTodo);
  const inputText = useRef(null);
  const handleAddTodo = () => {
    const newTodos = [...todos];
    const todo = {
      id: Math.floor(Math.random()),
      task: inputText.current.value,
      done: false,
    };
    newTodos.push(todo);
    setTodos(newTodos);
  };
  return (
    <div>
      <TaskList todos={todos} />
      <input ref={inputText} type="text" placeholder="add a new task"></input>
      <button onClick={handleAddTodo}>Add new task</button>
    </div>
  );
};

export default Todo;
