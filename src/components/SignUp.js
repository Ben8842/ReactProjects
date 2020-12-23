import React from "react";

const SignUp = () => (
  <div id="trivia">
    <h4>Sign Up Here </h4>
    <form>
      <div>
        <input id="tab" name="name" placeholder="NAME" />
      </div>{" "}
      <div>
        <input id="tab" name="email" placeholder="EMAIL" />
      </div>
      <div>
        <input id="tab" name="username" placeholder="USERNAME" />
      </div>
      <div>
        <input id="tab" type="text" name="password" placeholder="PASSWORD" />
      </div>
      <div>
        <button class="button button1">SUBMIT</button>
      </div>
    </form>
  </div>
);

export default SignUp;
