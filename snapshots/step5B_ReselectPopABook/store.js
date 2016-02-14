import { createStore } from 'redux';

import { createSelector } from 'reselect';

const initialState = {
    value: 0,
    books: {},
    subjects: {},
    selectedBooks: {}
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
            return Object.assign({}, state, { selectedBooks:  { ...state.selectedBooks, [action._id]: !state.selectedBooks[action._id] } });
        case 'REMOVE_BOOK':
            let booksClone = { ...state.books };
            delete booksClone[action._id];
            return Object.assign({}, state, { books: booksClone });
    }
    return state;
}

function arrayToHash(arr){
    let result = {};
    arr.forEach(item => result[item._id] = item);
    return result;
}

const booksStacker = createSelector([state => state.books, state => state.subjects], (stateBooks, stateSubjects) => {
    let books = Object.keys(stateBooks).map(_id => ({ ...stateBooks[_id] }));
    books.forEach(b => b.subjects = b.subjects.map(_id => stateSubjects[_id]).filter(x => x));

    let subjects = Object.keys(stateSubjects).map(_id => stateSubjects[_id]);

    console.log('STACKING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

    return { books, subjects };
});

export function selector(state){
    let { books, subjects } = booksStacker(state);

    return Object.assign({}, state, { books, subjects });
}

export default createStore(reducer);
