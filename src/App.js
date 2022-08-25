import React, { Component } from 'react';
import WholeForm from "./components/Form";

class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div>
        <h1>CV Application</h1>
        <WholeForm />
      </div>
    );
  }
}

export default App;
