import React from "react";
import "./About.css"; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>
        Currently pursuing{" "}
        <strong>MSc in Computer Science (Intelligent Systems) at TCD</strong>.
      </p>

      <div className="skills-container">
        <p>
          I am passionate about utilizing artificial intelligence and data
          engineering to solve real-world problems.
        </p>
        <p>
          <strong>Web :</strong> React, Typescript, JavaScript, CSS, HTML
        </p>
        <p>
          <strong>Database :</strong> SQL Server, MySQL, PostgreSQL.
        </p>
        <p>
          <strong>Programming Languages :</strong> Python, Java, C#
        </p>
        <p>
          <strong>Technologies :</strong> ASP.NET Core, Machine Learning,
          Artificial Intelligence, Git Version Control, Data Analytics and
          Statistics, ETL, SSIS, SSAS, Tableau, Power Bi
        </p>
        <p>
          <strong>Email:</strong> thakurv@tcd.ie
        </p>
      </div>
    </div>
  );
};

export default About;
