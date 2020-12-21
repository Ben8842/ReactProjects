import React, { Component } from "react";

class trivia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      isLoaded: false,
      triviaData: [],
      show: false,
    };
  }

  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=30")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          triviaData: json,
        });
      });
  }

  handleClcik() {
    this.setState({ show: true });
  }

  render() {
    var { triviaData, isLoaded, show } = this.state;
    console.log(triviaData.results);
    const questionBox = (
      <div id="trivia">
        <p id="trivia">QUESTION BOX</p>
        <p>question placeholder</p>
        <p id="trivia">ANSWER BOX</p>
        <p>answer placeholder</p>
      </div>
    );
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <body>
          <button onClick={() => this.handleClcik()}>Start Trivia</button>

          <p>Question</p>
          {isLoaded && show ? questionBox : null}

          <p>Enter your Answer</p>

          <button>SUBMIT</button>

          <ul>
            DATA HAS BEEN LOADED
            {triviaData.results.map((item) => (
              <li key={item.id}>
                Question: {item.question} | Answer: {item.correct_answer} |{" "}
                {item.id}
              </li>
            ))}
            ;
          </ul>
        </body>
      );
    }
  }
}

export default trivia;
