import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <ul>
                <li>
                    <span class="checkBox"></span>
                    <span class="text"></span>
                    <i className="fas fa-trash"></i>
                </li>
            </ul>
            
        );
    }
}

export default List;