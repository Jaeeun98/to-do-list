import React, { Component } from 'react';
import './app.css';
import AddForm from './component/addForm';
import List from './component/list';
import NavBar from './component/navBar';


class App extends Component {
  render() {
    return (
      <div className="wrap">
        <NavBar />
        <AddForm />
        <section>  
          <List />
        </section>
        <button className="allCheckBtn btn">All Reset</button>
        <button className="allResetBtn btn">All Reset</button>
      </div>
    );
  }
}

export default App;
