import { createStore } from 'redux';

const initialState = {
    value: 0
};

function reducer(state = initialState, action){
    switch(action.type){
        case 'INCREMENT':
            return Object.assign({}, state, { value: state.value + 1 });
        case 'DECREMENT':
            return Object.assign({}, state, { value: state.value - 1 });
    }
    return state;
}

export default createStore(reducer);