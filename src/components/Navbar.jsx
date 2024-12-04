import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h1>Student Management Portal</h1>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/view-students" style={styles.link}>View Students</Link>
        <Link to="/add-student" style={styles.link}>Add Student</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: { display: "flex", justifyContent: "space-between", padding: "10px", background: "#282c34", color: "white" },
  link: { margin: "0 10px", textDecoration: "none", color: "white" },
};

export default Navbar;
