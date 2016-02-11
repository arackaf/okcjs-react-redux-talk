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

export function selector(state){
    let books = Object.keys(state.books).map(_id => state.books[_id]);
    books.forEach(b => b.subjects = b.subjects.map(_id => state.subjects[_id] || null).filter(x => x));

    let subjects = Object.keys(state.subjects).map(_id => state.subjects[_id]);

    return Object.assign({}, state, { books, subjects });
}

export default createStore(reducer);
