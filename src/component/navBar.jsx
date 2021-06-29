import React, { PureComponent } from 'react';

class NavBar extends PureComponent {
    render() {
        return (
            <header>
                <span className="title">ToDoList</span>
                <div className="smallTitle">알찬 하루를 위한, 나만의 Check List</div>
            </header>
        );
    }
}

export default NavBar;