import React, { Component } from 'react';



class List extends Component {
    state = {
        check : [
            { id : 1, checkList : 'react 공부하기' },
            { id : 2, checkList : '30분동안 운동하기'}
        ]
    }


    render() {
        return (
            <ul>
                <li>
                    <button className="checkBox"></button>
                    <div className="text">
                        <span className="listText">공부 </span>
                        <i className="fas fa-trash"></i>
                    </div>
                    
                </li>
                
            </ul>
            
        );
    }
}

export default List;