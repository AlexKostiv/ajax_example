/**
 * Created by IlyaLitvinov on 07.04.17.
 */
import React, { Component } from 'react';
import { addItem } from '../actions/actions';
import { connect } from 'react-redux'
import Input from '../components/input.component';

class Header extends Component {
    constructor() {
        super();
    }

    addItem(text) {
        this.props.onAddItem(text);
    }

    render() {
        const {title} = this.props;

        return <div className="todo__header">
            <h2 className="todo__title">{title}</h2>
            <Input onSubmit={this.addItem.bind(this)}/>
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