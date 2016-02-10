import { createStore } from 'redux';

const initialState = {
    value: 0,
    books: []
};

function reducer(state = initialState, action){
    switch(action.type){
        case 'INCREMENT':
            return Object.assign({}, state, { value: state.value + 1 });
        case 'DECREMENT':
            return Object.assign({}, state, { value: state.value - 1 });
        case 'BOOKS_LOADED':
            return Object.assign({}, state, { books: action.books });
    }
    return state;
}

export default createStore(reducer);