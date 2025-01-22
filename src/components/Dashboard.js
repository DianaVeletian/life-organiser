import React, { useState } from "react";
import TodoList from "./TodoList.js";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasksByDate, setTasksByDate] = useState({
    "2025-01-21": [{ text: "Laundry", completed: true }],
  });

  const dateKey = selectedDate.toISOString().split("T")[0];
  const tasks = tasksByDate[dateKey] || [];

  const addTask = (task) => {
    setTasksByDate({
      ...tasksByDate,
      [dateKey]: [...tasks, task],
    });
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasksByDate({ ...tasksByDate, [dateKey]: updatedTasks });
  };

  const progress =
    tasks.length > 0
      ? (tasks.filter((task) => task.completed).length / tasks.length) * 100
      : 0;

  return (
    <div className="dashboard">
      <h1>Life Organiser</h1>
      <div className="calendar-container">
        <Calendar onChange={setSelectedDate} value={selectedDate} />
      </div>
      <h2>Tasks for {dateKey}</h2>
      <div className="progress-bar">
        <div style={{ background: "#ccc", borderRadius: "8px", width: "100%" }}>
          <div
            style={{
              background: "#4caf50",
              height: "10px",
              width: `${progress}%`,
              borderRadius: "8px",
            }}
          ></div>
        </div>
        <p>{Math.round(progress)}% Completed</p>
      </div>
      <TodoList tasks={tasks} addTask={addTask} toggleTask={toggleTask} />
    </div>
  );
};

export default Dashboard;
