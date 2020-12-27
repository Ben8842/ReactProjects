//import { null } from "mathjs";

import React, { Component } from "react";
import { Link } from "react-router-dom";

class signUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      isLoaded: false,
      email: null,
      username: null,
      password: null,
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.closeModal = this.closeModal.bind(this);
  }

  submitSignUp() {
    console.log("helloSubmit");
    const { email, username, password } = this.state;
    fetch("http://localhost:5000/users", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ email, username, password }),
      // body data type must match "Content-Type" header
    })
      .then((res) => {
        console.log("trigger");
        if (res.status === 400) {
          return res.text();
        }
        //if (res.status === 201) {
        else {
          return;
        }
      })

      .then((data) => {
        if (typeof data === "string") {
          console.log("duplicate user detected");
          // this.props.createModalError(data);
        }
        //if (typeof data === "object") {
        else {
          console.log("new user saved!");
          //  this.closeModal();
        }
      });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      email: event.target.email,
      username: event.target.username,
      password: event.target.password,
    });
  }

  render() {
    const signFields = (
      <div id="trivia">
        <form>
          <h4>Sign Up Here</h4>

          <div>
            <input
              id="tab"
              name="email"
              placeholder="EMAIL"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              id="tab"
              name="username"
              placeholder="USERNAME"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              id="tab"
              type="text"
              name="password"
              placeholder="PASSWORD"
              type="text"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button class="button button1" onClick={() => this.submitSignUp()}>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    );

    return <div>{signFields}</div>;
  }
}

export default signUp;
