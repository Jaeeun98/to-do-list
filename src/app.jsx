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
    ],
    count : 0,
  }

  handleListAdd = e => {
    const list = e.target[0].value;
    if(list == ''){
      e.preventDefault();
      return;
    } else {
      const check = [ ...this.state.check, { id : Date.now(), checkList : list } ]
    
      this.setState({check});
      e.target[0].value = '';
      e.preventDefault();
    } 
  }

  handleRemoveList = (e) => {
    const removeList = e.target.parentNode.parentNode.parentNode.innerText;
    const check = this.state.check.filter(list => list.checkList !== removeList)

    this.setState({check});
  }

  handleReset = () => {
    const check = [];

    this.setState({check});
  }

  render() {
    return (
      <div className="wrap">
        <NavBar count={this.state.count} />
        <AddForm 
          handleListAdd={this.handleListAdd}
        />
        <section>  
          <List 
            check={this.state.check} 
            handleRemoveList={this.handleRemoveList}
          />
        </section>
        <button className="allResetBtn btn" onClick={this.handleReset}>All Reset</button>
      </div>
    );
  }
}

export default App;
