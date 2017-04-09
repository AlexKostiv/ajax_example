/**
 * Created by IlyaLitvinov on 07.04.17.
 */
import { combineReducers } from 'redux'
import { ADD_ITEM, TOGGLE_ITEM, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/actions';
const {SHOW_ALL} = VisibilityFilters;

let ITEM_ID = 0;

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: [
        {
            text: "Hello wolrd",
            id: Date.now(),
            completed: false
        },
        {
            text: "Hello wolrd2",
            id: Date.now()+2,
            completed: false
        },
        {
            text: "Hello wolrd3",
            id: Date.now()+3,
            completed: false
        },
    ]
};

function visibilityFilter(state = initialState.visibilityFilter, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function todos(state = initialState.todos, action) {
    switch (action.type) {
        case ADD_ITEM:
            const item = Object.assign({}, action.item, {id: ++ITEM_ID});
            return state.concat([item]);

        case TOGGLE_ITEM:
            return state.map(todo => {
                if (todo.id === action.id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
        default:
            return state;
    }
}

const todoApp = combineReducers({visibilityFilter, todos});

export default todoApp;