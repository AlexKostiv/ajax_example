/**
 * Created by IlyaLitvinov on 07.04.17.
 */
import React, { Component } from 'react';
import { toggleItem } from '../actions/actions';
import { connect } from "react-redux";

class List extends Component {
    constructor() {
        super();
    }

    render() {
        const {todos, onTodoClick} = this.props;

        const listComponents = todos.map((item, i) => {
            const _onClick = () => {
                onTodoClick(item.id);
            };

            return <li key={i.toString()} onClick={_onClick}>{item.text}</li>
        });

        return <ul>{listComponents}</ul>
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleItem(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);

