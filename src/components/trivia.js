import React, { Component } from "react";

class trivia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      isLoaded: false,
      triviaData: [],
      show: false,
      count: 1,
      isCorrectChoice: false,
      isWrongChoice: false,
      correctCount: 0,
    };
  }

  componentDidMount() {
    fetch(
      "https://opentdb.com/api.php?amount=15&category=30&type=multiple&encode=base64"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          triviaData: json,
        });
      });
  }

  handleClick() {
    this.setState({ show: true });
  }

  nextTrivia() {
    this.incrementCount();
    this.setState({ isCorrectChoice: false });
    this.setState({ isWrongChoice: false });
  }

  incrementCount() {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  }

  incrementCorrectCount() {
    this.setState((state) => {
      return { correctCount: state.count + 1 };
    });
  }

  isCorrect(ans) {
    var {
      triviaData,
      count,
      isCorrectChoice,
      isWrongChoice,
      correctCount,
    } = this.state;
    if (atob(triviaData.results[count].correct_answer) === ans) {
      this.incrementCorrectCount();
      this.setState({
        isCorrectChoice: true,
      });
    } else {
      this.setState({
        isWrongChoice: true,
      });
    }
  }

  displayTrivia() {
    var { isLoaded, triviaData, count } = this.state;

    if (isLoaded) {
      var firstQuestion = triviaData.results[count].question;
      var decodedStringAtoB = atob(firstQuestion);
    } else {
      console.log("waiting");
    }
    const tquestion = (
      <div>
        <p>{decodedStringAtoB}</p>
      </div>
    );
    return tquestion;
  }

  displayTriviaA() {
    var {
      isLoaded,
      triviaData,
      count,
      isCorrectChoice,
      isWrongChoice,
    } = this.state;
    if (isLoaded) {
      var firstAnswer = atob(triviaData.results[count].correct_answer);
      var secondAnswer = atob(triviaData.results[count].incorrect_answers[0]);
      var thirdAnswer = atob(triviaData.results[count].incorrect_answers[1]);
      var fourthAnswer = atob(triviaData.results[count].incorrect_answers[2]);

      function shuffle(arry) {
        arry.sort(() => Math.random() - 0.5);
      }
      let answerArr = [firstAnswer, secondAnswer, thirdAnswer, fourthAnswer];
      shuffle(answerArr);
      const tAnswers = (
        <div>
          <button
            class="button button1"
            onClick={() => this.isCorrect(answerArr[0])}
          >
            A. {answerArr[0]}
          </button>
          <button
            class="button button1"
            onClick={() => this.isCorrect(answerArr[1])}
          >
            B. {answerArr[1]}
          </button>
          <button
            class="button button1"
            onClick={() => this.isCorrect(answerArr[2])}
          >
            C. {answerArr[2]}
          </button>
          <button
            class="button button1"
            onClick={() => this.isCorrect(answerArr[3])}
          >
            D. {answerArr[3]}
          </button>
        </div>
      );
      return tAnswers;
    } else {
      console.log("waiting");
    }
  }

  render() {
    var {
      triviaData,
      isLoaded,
      show,
      count,
      isCorrectChoice,
      isWrongChoice,
      correctCount,
    } = this.state;
    console.log(triviaData.results);

    const question = this.displayTrivia();
    const answer = this.displayTriviaA();
    const celebration = (
      <div id="correct">
        <p id="correct">You got this question number {count} correct! </p>
        <p>{question}</p>
        <p id="correct">! CELEBRATION !</p>
        <p>Continue to the next Question</p>
        <button class="button button3" onClick={() => this.nextTrivia()}>
          Next Question
        </button>
      </div>
    );

    const recuperate = (
      <div id="wrong">
        <p id="wrong">You got this question number {count} Wrong! </p>
        <p>Don't give up yet. </p>
        <p id="wrong">Continue to the next Question</p>
        <button class="button button2" onClick={() => this.nextTrivia()}>
          Next Question
        </button>
      </div>
    );

    const questionBox = (
      <div id="trivia">
        <p id="trivia">QUESTION {count} </p>
        <p>{question}</p>
        <p id="trivia">CHOOSE YOUR ANSWER</p>
        <p>{answer}</p>
      </div>
    );

    const runningScore = (
      <p id="tab">
        {correctCount} answers correct out of {count} questions
      </p>
    );

    const triviaComplete = (
      <div id="trivia">
        <p id="trivia">Trivia Complete! </p>
        <p>
          Your score is {correctCount} of {count}
        </p>
        <p id="trivia">Thank you so much for playing</p>
        <p>Try again soon!</p>
      </div>
    );

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <body>
          <div id="trivia">
            <button class="button button1" onClick={() => this.handleClick()}>
              Start Trivia
            </button>

            {isLoaded && show ? runningScore : null}
          </div>
          {count === 10 ? triviaComplete : null}
          {isLoaded && show && !isCorrectChoice && !isWrongChoice
            ? questionBox
            : null}
          {isCorrectChoice ? celebration : null}
          {isWrongChoice ? recuperate : null}
        </body>
      );
    }
  }
}

export default trivia;

/*<ul>
            DATA HAS BEEN LOADED
            {triviaData.results.map((item) => (
              <li key={item.id}>
                Question: {item.question} | Answer: {item.correct_answer} |{" "}
                {item.id}
              </li>
            ))}
            ;
          </ul>*/
