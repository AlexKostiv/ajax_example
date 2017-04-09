/**
 * Created by IlyaLitvinov on 08.04.17.
 */
import React, { Component } from 'react';


export default class Input extends Component {
    constructor() {
        super();
        this.state = {inputValue: ''};
    }

    changeInput(e) {
        this.setState({inputValue: e.target.value});
        e.preventDefault();
    }

    addItem() {
        this.props.onSubmit(this.state.inputValue);
        this.setState({inputValue: ''});
    }

    render() {
        const {inputValue} = this.state;

        return <div className="">
            <input type="text"
                   value={inputValue}
                   onChange={this.changeInput.bind(this)}/>
            <input type="button"
                   onClick={this.addItem.bind(this)}
                   value="add"/>
        </div>
    }
}

