import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import "./ViewStudents.css";

function ViewStudents() {
  const { students, deleteStudent } = useContext(StudentContext);

  return (
    <div className="container">
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students to display.</p>
      ) : (
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.course}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ViewStudents;
