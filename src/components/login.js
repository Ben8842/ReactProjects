import React from "react";

const login = () => (
  <div id="trivia">
    <form>
      <h4>Log in Here</h4>
      <div>
        <input id="tab" name="name" placeholder="NAME" />
      </div>
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

export default login;
