import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Home.css";
import ContactMe from "./ContactMe";

const Home = () => {
  const [text, setText] = useState("");
  const fullText = "Designer / Developer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [fullText]);
  return (
    <div className="home-container">
      <Navbar />
      <h1 className="typing-heading">
        {text}
        <span className="cursor">_</span>
      </h1>
      <p>&gt; Hi there, I'm Ved Thakur</p>
      <p>&gt; Full stack Dev & Student at TCD</p>
      <p>&gt; Welcome to my page!</p>
    </div>
  );
};

export default Home;
