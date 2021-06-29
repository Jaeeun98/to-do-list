import React, { Component } from 'react';

class AddForm extends Component {


    render() {
        return (
            <form onSubmit={this.props.handleListAdd}>
                <input type="text" className="inputText" />
                <input type="submit" value="Add" className="inputBtn btn"/>
            </form>
        );
    }
}

export default AddForm;