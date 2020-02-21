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
import {StyleSheet, View, Text} from 'react-native';
import {createStore} from 'redux';
import routeReducer from './reducers';
import {Provider} from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import PhotoView from './screens/PhotoView';

let store = createStore(routeReducer);
const Stack = createStackNavigator();

class App extends React.Component {
  render() {
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
  }
}

const styles = StyleSheet.create({});

export default App;
