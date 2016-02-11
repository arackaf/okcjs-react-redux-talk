import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import ConnectedMain from './app/component';

ReactDom.render(
    <Provider store={store}>
        <ConnectedMain></ConnectedMain>
    </Provider>, document.getElementById('root')
);