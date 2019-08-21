import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import AppContainer from './AppContainer';
import RootReducer from './frontend/reducers/root_reducer';


const store = createStore(RootReducer);

export default function App() {
  return (
    <Provider store = {store}>
      <AppContainer/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
