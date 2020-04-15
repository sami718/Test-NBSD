/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import _Home from './src/containers/screens/Home/Home';

//Redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './src/redux/reducers';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <_Home />
    </Provider>
  );
};

export default App;
