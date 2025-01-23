import React, { useState, useEffect } from "react";
import Tabs from "./components/Tabs.js";
import CalendarComponent from "./components/Calendar.js";
import TodoList from "./components/TodoList.js";
import Dashboard from "./components/Dashboard.js";
import ProgressBar from "./components/ProgressBar.js";

const App = () => {
  const [activeTab, setActiveTab] = useState("Calendar");
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  useEffect(() => {
    console.log(`Active Tab: ${activeTab}`);
  }, [activeTab]);

  return (
    <div className="app-container">
      <h1>Life Organiser</h1>
      <Tabs setActiveTab={setActiveTab} />
      {activeTab === "Calendar" && (
        <CalendarComponent onDateChange={(date) => console.log(date)} />
      )}
      {activeTab === "To-Do List" && (
        <TodoList tasks={tasks} addTask={addTask} toggleTask={toggleTask} />
      )}
      {activeTab === "Dashboard" && <Dashboard tasks={tasks} />}
      <ProgressBar tasks={tasks} />
    </div>
  );
};

export default App;

