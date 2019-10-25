import React from "react";
import Container from "./components/Container";
import SignUp from "./components/SignUp";
import Message from "./components/Message";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <SignUp />
        <Message className="is-info" title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>.
        </Message>
      </Container>
    </div>
  );
}

export default App;
