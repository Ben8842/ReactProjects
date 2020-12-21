import React, { Component } from "react";

class trivia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      isLoaded: false,
      triviaData: [],
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

  render() {
    var { triviaData, isLoaded } = this.state;
    console.log(triviaData.results);
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <body>
          <button>Start Trivia</button>

          <p>Question</p>

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
