import React, { useState } from "react";

const Tabs = ({ setActiveTab }) => {
  const [active, setActive] = useState("Calendar");

  const handleTabClick = (tab) => {
    setActive(tab);
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      {["Calendar", "To-Do List", "Dashboard"].map((tab) => (
        <button
          key={tab}
          className={`tab-button ${active === tab ? "active" : ""}`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
