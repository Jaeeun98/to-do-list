import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <header>
                <span className="title">ToDoList</span>
                <div className="smallTitle">지금까지 완료한 할 일 목록 : <span className="resultList">0</span></div>
            </header>
        );
    }
}

export default NavBar;