import React, {Component} from 'react';
import './App.css';

import axios from "axios";

class App extends Component {

  // default State object
  state = {
    contacts: []
  };

  componentDidMount() {
    axios
        .get("/api/hello/")
        .then(response => {

          // create an array of contacts only with relevant data
          const newContacts = response.data.hello;

          // create a new "State" object without mutating
          // the original State object.
          const newState = Object.assign({}, this.state, {
            contacts: newContacts
          });

          // store the new state object in the component's state
          this.setState(newState);
        })
        .catch(error => console.log(error));
  }

  render() {
    return (
        <div className="App">

          {this.state.contacts}
        </div>
    );
  }
}

export default App;
