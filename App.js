import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import RootStack from './components/RootStack';
import rootReducer from './reducers';


const store = createStore(rootReducer);

export default class App extends React.Component {
    render() {
	return (
            <Provider store={store}>
		<RootStack />
            </Provider>
	);
    }
}
