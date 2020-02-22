/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createStore, applyMiddleware} from 'redux';
import routeReducer from './reducers';
import {Provider} from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import PhotoView from './screens/PhotoView';
import createSagaMiddleWare from 'redux-saga';
import {watchLoadData} from './sagas';

const App = () => {
  const sagaMiddleWare = createSagaMiddleWare();
  let store = createStore(routeReducer, applyMiddleware(sagaMiddleWare));

  sagaMiddleWare.run(watchLoadData);

  store.subscribe(() => console.log(store.getState()));

  const Stack = createStackNavigator();
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Photo" component={PhotoView} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
