import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import AppContainer from './AppContainer';
import RootReducer from './frontend/reducers/root_reducer';
import Greeting from './frontend/components/greeting/greeting';
import LoginForm from './frontend/components/session/login_form';

const store = createStore(RootReducer);

export default function App() {
  return (
    <AppContainer/>
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
