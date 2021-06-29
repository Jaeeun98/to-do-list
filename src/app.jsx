import React, { Component } from 'react';
import './app.css';
import AddForm from './component/addForm';
import List from './component/list';
import NavBar from './component/navBar';


class App extends Component {

  state = {
    check : [
        { id : 1, checkList : 'react 공부하기' },
        { id : 2, checkList : '30분동안 운동하기'},
        { id : 3, checkList : '이력서 작성하기'}
    ]
  }

  handleListAdd = e => {
    const list = e.target[0].value;
    const check = [ ...this.state.check, { id : Date.now(), checkList : list } ]

    this.setState({check});
    e.target[0].value = '';
    e.preventDefault();
  }

  

  render() {
    return (
      <div className="wrap">
        <NavBar />
        <AddForm 
          handleListAdd={this.handleListAdd}
        />
        <section>  
          <List 
            check={this.state.check} 
          />
        </section>
        <button className="allCheckBtn btn">All Reset</button>
        <button className="allResetBtn btn">All Reset</button>
      </div>
    );
  }
}

export default App;
