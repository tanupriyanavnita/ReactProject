import {createStackNavigator, createAppContainer} from 'react-navigation';
import Splash from './Splash';
import Login from './Login';
const App = createStackNavigator({
  Splash: {screen: Splash, navigationOptions: {header: null}},
  Login: {screen: Login, navigationOptions: {header: null}},
});
export default createAppContainer(App);
