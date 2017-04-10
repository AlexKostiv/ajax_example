/**
 * Created by IlyaLitvinov on 07.04.17.
 */
import React, { Component } from 'react';
import { toggleItem, VisibilityFilters } from '../actions/actions';
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

const getVisibilityFilter = (todos, activeFilter) => {
   switch (activeFilter) {
       case VisibilityFilters.SHOW_ALL:
           return todos;
       case VisibilityFilters.SHOW_COMPLETED:
           return todos.filter(item => {
               return item.completed;
           });
       case VisibilityFilters.SHOW_ACTIVE:
           return todos.filter(item => {
               return !item.completed;
           });
       default:
           throw Error('Please specify activeFilter!');
   }
};

const mapStateToProps = (state) => {
    return {
        todos: getVisibilityFilter(state.todos, state.visibilityFilter)
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

