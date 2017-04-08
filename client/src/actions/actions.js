/**
 * Created by IlyaLitvinov on 07.04.17.
 */
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};


export function addItem (item) {
    return {
        type: ADD_ITEM,
        item
    };
}

export function toggleItem (id) {
    debugger;
    return {
        type: TOGGLE_ITEM,
        id
    };
}

export function setVisibilityFilter (filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}