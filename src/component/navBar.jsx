import React, { PureComponent } from 'react';

class NavBar extends PureComponent {
    render() {
        return (
            <header>
                <span className="title">ToDoList</span>
                <div className="smallTitle">지금까지 완료한 할 일 목록 : <span className="resultList">{this.props.count}</span></div>
            </header>
        );
    }
}

export default NavBar;