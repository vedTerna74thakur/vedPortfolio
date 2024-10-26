import React from "react";

const Terminal = ({ children }) => {
  return <div style={styles.terminal}>{children}</div>;
};

const styles = {
  terminal: {
    backgroundColor: "black",
    color: "green",
    padding: "20px",
    borderRadius: "5px",
    fontFamily: "monospace",
    minHeight: "200px",
    boxShadow: "0px 0px 15px rgba(0, 255, 0, 0.5)",
  },
};

export default Terminal;
