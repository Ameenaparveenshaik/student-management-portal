import React from "react";

function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to the Student Management Portal</h1>
      <p><h2>Manage student details efficiently!</h2></p>
    </div>
  );
}

const styles = {
  container: { padding: "20px", textAlign: "center" },
};

export default Home;
