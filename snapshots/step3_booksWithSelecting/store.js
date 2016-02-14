import { createStore } from 'redux';

const initialState = {
    value: 0,
    books: [],
    subjects: []
};

//DON'T RUN THIS - books will fail without subjects

//DON'T FORGET TO MENTION EDITING SUBJECT POTENTIAL PROBLEM

function reducer(state = initialState, action){
    switch(action.type){
        case 'INCREMENT':
            return Object.assign({}, state, { value: state.value + 1 });
        case 'DECREMENT':
            return Object.assign({}, state, { value: state.value - 1 });
        case 'BOOKS_LOADED':
            return Object.assign({}, state, { books: loadSubjectsIntoBooks(action.books, state.subjects) });
        case 'SUBJECTS_LOADED':
            return Object.assign({}, state, { subjects: action.subjects });
        case 'TOGGLE_BOOK':
            //TODO: implement
            return state;
    }
    return state;
}

function loadSubjectsIntoBooks(books, subjects){
    let subjectsHash = {};
    subjects.forEach(s => subjectsHash[s._id] = s);

    books.forEach(b => b.subjects = b.subjects.map(_id => subjectsHash[_id]));

    return books;
}

export default createStore(reducer);