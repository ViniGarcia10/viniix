import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// import Login from './pages/Login';
import Main from './pages/main';

const Routes = createAppContainer (
  createSwitchNavigator({
    // Login,
    Main
  })
);

export default Routes;

