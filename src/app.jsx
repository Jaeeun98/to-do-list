import React, { Component } from 'react';
import './app.css';
import AddForm from './component/addForm';
import List from './component/list';
import NavBar from './component/navBar';


class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <AddForm />
        <List />
      </>
    );
  }
}

export default App;
