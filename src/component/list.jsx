import React, { Component } from 'react';


class List extends Component {

    render() {

        return (
            <ul>
                {this.props.check.map(list => 
                    <li key={list.id}>
                        <button className="checkBox"></button>
                        <div className="text">
                            <span className="listText">{list.checkList}</span>
                            <i className="fas fa-trash"></i>
                        </div>
                    </li>
                )}
                
                
            </ul>
            
        );
    }
}

export default List;