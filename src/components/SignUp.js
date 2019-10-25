import React, { Component } from "react";
import CoolButton from "../components/CoolButton";
import FormField from "../components/FormField";
import Nav from "../components/Nav";

class SignUp extends Component {
  render() {
    return (
      <div>
        <Nav />
        <form action="/signup" method="post">
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField
            label="Email"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
          <FormField
            label="Password"
            type="password"
            placeholder="Please fill in a password"
          />
          <CoolButton className="is-medium is-primary is-rounded">
            Submit
          </CoolButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
