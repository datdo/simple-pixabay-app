import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import RootStack from './components/RootStack';
import rootReducer from './reducers';


const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

export default class App extends React.Component {
    render() {
	return (
            <Provider store={store}>
		<RootStack />
            </Provider>
	);
    }
}
