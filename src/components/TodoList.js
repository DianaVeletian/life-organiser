import React, { useState } from "react";

const TodoList = ({ tasks = [], addTask, toggleTask }) => {
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim()) {
      addTask({ text: taskInput, completed: false });
      setTaskInput("");
    }
  };

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks && tasks.length > 0 ? (
          tasks.map((task, index) => (
            <li key={index}>
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
                onClick={() => toggleTask(index)}
              >
                {task.text}
              </span>
              <button onClick={() => toggleTask(index)}>
                {task.completed ? "Undo" : "Complete"}
              </button>
            </li>
          ))
        ) : (
          <p>No tasks added yet. Start by adding a new task!</p>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
