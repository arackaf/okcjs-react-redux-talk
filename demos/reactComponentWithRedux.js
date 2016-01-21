import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

const defaultState = { val: 1 };
const reducer = (state = defaultState, action) => Object.assign({}, state, { val: state.val + 1 });

let store = createStore(reducer);

class Counter extends React.Component {
    increment(){
        this.props.dispatch({ type: 'a' });
    }
    render() {
        return <div>Count {this.props.val} <button onClick={() => this.increment()}>Increment</button></div>;
    }
}

const select = state => state;

let CounterConnected = connect(select)(Counter);

ReactDOM.render(
    <Provider store={store}>
        <CounterConnected />
    </Provider>, document.getElementById('root'));