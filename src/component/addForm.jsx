import React, { Component } from 'react';

class AddForm extends Component {
    render() {
        return (
            <form>
                <input type="text" className="inputText" />
                <input type="button" value="Add" className="inputBtn btn"/>
            </form>
        );
    }
}

export default AddForm;