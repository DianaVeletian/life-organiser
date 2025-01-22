import React from "react";

const ProgressBar = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "#e0e0de", borderRadius: 5 }}>
      <div
        style={{
          width: "50%",
          height: "10px",
          backgroundColor: "#007bff",
          borderRadius: 5,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
