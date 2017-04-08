/**
 * Created by IlyaLitvinov on 07.04.17.
 */
import React, { Component } from 'react';
import { addItem } from '../actions/actions';
import { connect } from 'react-redux'

class Header extends Component {
    constructor() {
        super();
        // this.state = { inputValue: 'Hello'};
    }

    onSubmit(e) {
        this.props.onAddItem(e.target.value);
    }

    render() {
        const {title} = this.props;

        return <div className="todo__header">
            <h2 className="todo__title">{title}</h2>
            <input type="text"
                   onSubmit={this.onSubmit.bind(this)}/>
            <input type="button"
                   value="add"
                   onClick={this.onSubmit.bind(this)}/>
        </div>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddItem: (text) => {
            const newItem = {
                text, completed: false
            };

            dispatch(addItem(newItem));
        }
    }
};
const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);