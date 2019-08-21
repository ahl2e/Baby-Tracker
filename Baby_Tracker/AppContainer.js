import { createAppContainer, createStackNavigator } from 'react-navigation';
import Greeting from './frontend/components/greeting/greeting';
import LoginForm from './frontend/components/session/login_form'

const AppNavigator = createStackNavigator({
  Greeting: { screen: Greeting },
  LoginForm: {screen: LoginForm},
});


const AppContainer = createAppContainer(AppNavigator);

// Now AppContainer is the main component for React to render

export default AppContainer;
