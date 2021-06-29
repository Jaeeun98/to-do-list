import React, { Component } from 'react';


class List extends Component {

    checkedRef = React.createRef();

    handleChecked = (e) => {
        const checkedList = e.target.nextElementSibling.childNodes[0];

        checkedList.style.textDecoration = 'line-through';
        checkedList.style.opacity = '0.5';
        e.target.style.backgroundColor = '#C7A4C6';
    }

    render() {
        return (
            <ul>
                {this.props.check.map(list => 
                    <li key={list.id}>
                        <button className="checkBox" onClick={this.handleChecked}></button>
                        <div className="text">
                            <span className="listText" ref={this.checkedRef}>{list.checkList}</span>
                            <button onClick={this.props.handleRemoveList} className="trashBtn">
                                <i className="fas fa-trash"></i>
                            </button>
                        </div>
                    </li>
                )}
            </ul>
            
        );
    }
}

export default List;