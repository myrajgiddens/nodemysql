import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
       // .catch(err => err);
}

componentDidMount() {
    this.callAPI();
}


render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Savannah, GA Vacation & Travel Information</h1>
          <form>
            <label>
              Question:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </header>

        
        <p className="App-intro">;{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;