import { createStore } from 'redux'

const defaultState = { val: 1 };
const reducer = (state = defaultState, action) => Object.assign({}, state, { val: state.val + 1 });

let store = createStore(reducer);

store.dispatch({ type: 's' });
store.dispatch({ type: 's' });

alert(store.getState().val);

export default {};