import React from 'react';
import { connect } from 'react-redux';

class Main extends React.Component {
    increment(){
        this.props.dispatch({ type: 'INCREMENT' });
    }
    decrement(){
        this.props.dispatch({ type: 'DECREMENT' });
    }
    render(){
        return (
            <div>{'Value: ' + this.props.value} <button onClick={() => this.increment()}>+</button><button onClick={() => this.decrement()}>-</button></div>
        );
    }
}

const ConnectedMain = connect(state => state)(Main);

export default ConnectedMain;