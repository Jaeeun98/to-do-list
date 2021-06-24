import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <header>
                <span className="title">ToDoList</span>
                <span className="resultList">0</span>
            </header>
        );
    }
}

export default NavBar;