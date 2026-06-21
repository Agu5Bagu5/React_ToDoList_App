import React from "react";
import { Container } from "react-bootstrap";
import AddAct from "./components/Add-Act-System";
import ListAct from "./components/List-Act";

function App() {
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div style={{ width: "700px" }}>
          <AddAct />
          <ListAct />
        </div>
      </Container>
    </>
  );
}

export default App;
