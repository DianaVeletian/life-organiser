import React from "react";
import Dashboard from "./components/Dashboard.js";
import TodoList from "./components/TodoList.js";
import Calendar from "./components/Calendar.js";
import ProgressBar from "./components/ProgressBar.js";

const App = () => {
  return (
    <div>
      <Dashboard />
      <ProgressBar />
      <Calendar />
      <TodoList />
    </div>
  );
};

export default App;
