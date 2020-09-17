import React, { Component } from "react";
import "./App.css";
import CharComponent from "./CharComponent/CharComponent";
import ValidationComponent from "./ValidationComponent/ValidationComponent";

class App extends Component {
  state = {
    text: "",
  };

  validationListener = (event) => {
    const text = event.target.value;

    this.setState({ text: text });
  };

  charListener = (index) => {
    const text = [...this.state.text.split("")];

    text.splice(index, 1);

    this.setState({ text: text.join("") });
  };

  render() {
    let validationComponent = null;
    let charComponents = null;

    validationComponent = (
      <div>
        <ValidationComponent length={this.state.text.length} />
      </div>
    );

    charComponents = (
      <div>
        {this.state.text.split("").map((c, index) => {
          return (
            <CharComponent
              key={index}
              value={c}
              click={() => this.charListener(index)}
            />
          );
        })}
      </div>
    );

    return (
      <div className="App">
        {validationComponent}

        <h3>Char Components</h3>
        {charComponents}

        <input
          id="input"
          type="text"
          onChange={(event) => this.validationListener(event)}
          value={this.state.text}
        ></input>
      </div>
    );
  }
}

export default App;
