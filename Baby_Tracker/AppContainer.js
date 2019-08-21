import { createAppContainer, createStackNavigator } from 'react-navigation';
import Greeting from './frontend/components/greeting/greeting';
import LoginFormContainer from './frontend/components/session/login_form_container';
import SignupFormContainer from './frontend/components/session/sign_up_form_container';

const AppNavigator = createStackNavigator({
  Greeting: { screen: Greeting },
  LoginForm: {screen: LoginFormContainer},
  SignupForm: {screen: SignupFormContainer},
});


const AppContainer = createAppContainer(AppNavigator);

// Now AppContainer is the main component for React to render

export default AppContainer;
