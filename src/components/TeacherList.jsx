import React from "react";
import "../styles/teacherList.css";
import Image1 from "../assets/cho.jpg"; // Corrected import

const teachers = [
  {
    image: Image1,
    name: "Tan Fuc",
    duration: "10 hours lesson",
    cost: "10",
  },
  {
    image: Image1,
    name: "Tan Fuc",
    duration: "10 hours lesson",
    cost: "10",
  },
  {
    image: Image1,
    name: "Tan Fuc",
    duration: "10 hours lesson",
    cost: "10",
  },
  {
    image: Image1,
    name: "Tan Fuc",
    duration: "10 hours lesson",
    cost: "10",
  },
 
];

const TeacherList = () => {
  return (
    <div className="teacher--list">
      {" "}
      {/* Corrected class name */}
      <div className="list--header">
        <h2>Teachers</h2>
        <select>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>
      <div className="list--container">
        {teachers.map((teacher, index) => (
          <div key={index} className="list">
            <div className="teacher--details">
              <img src={teacher.image} alt={teacher.name} />
              <h2>{teacher.name}</h2>
            </div>
            <span>{teacher.duration}</span>
            <span>Cost: ${teacher.cost}/hr.</span>
            <span className="teacher--todo">:</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherList;
