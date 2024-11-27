import React, { useState } from "react";
// import React from "react";
// Icon component
const Icon = ({ onClick, children }) => {
  const [layout, setLayout] = useState("grid"); // Initial layout

  const toggleLayout = () => {
    setLayout((prevLayout) => (prevLayout === "grid" ? "list" : "grid"));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { onClick: toggleLayout });
      })}
    </div>
  );
  // Parent component
};

export default Icon;
