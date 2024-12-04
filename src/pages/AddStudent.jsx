import React, { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";
import "./AddStudent.css";

function AddStudent() {
  const { addStudent } = useContext(StudentContext);
  const [student, setStudent] = useState({ id: "", name: "", age: "", course: "" });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(student);
    setStudent({ id: "", name: "", age: "", course: "" });
  };

  return (
    <div className="add-student-container">
      <h2>Add Student</h2>
      <form className="add-student-form" onSubmit={handleSubmit}>
        <input
          name="id"
          placeholder="Student ID"
          value={student.id}
          onChange={handleChange}
          required
        />
        <input
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
          required
        />
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={student.age}
          onChange={handleChange}
          required
        />
        <input
          name="course"
          placeholder="Course"
          value={student.course}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
