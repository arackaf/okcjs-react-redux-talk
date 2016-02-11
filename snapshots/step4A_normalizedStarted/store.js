import { createStore } from 'redux';

const initialState = {
    value: 0,
    books: {},
    subjects: {}
};

function reducer(state = initialState, action){
    switch(action.type){
        case 'INCREMENT':
            return Object.assign({}, state, { value: state.value + 1 });
        case 'DECREMENT':
            return Object.assign({}, state, { value: state.value - 1 });
        case 'BOOKS_LOADED':
            return Object.assign({}, state, { books: arrayToHash(action.books) });
        case 'SUBJECTS_LOADED':
            return Object.assign({}, state, { subjects: arrayToHash(action.subjects) });
        case 'TOGGLE_BOOK':
            return state; //????
    }
    return state;
}

function arrayToHash(arr){
    let result = {};
    arr.forEach(item => result[item._id] = item);
    return result;
}

export default createStore(reducer);