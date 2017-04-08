import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import App from './components/app.component';
import store from './store/createStore';

const root = document.querySelector('#root');

console.log(store.getState());
render(<Provider store={store}>
        <App />
    </Provider>, root);

