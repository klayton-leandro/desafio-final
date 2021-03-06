import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Subscriptions from '~/pages/Subscriptions';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({ SignIn, SignUp }),
        App: createBottomTabNavigator(
          { Dashboard, Subscriptions, Profile },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              allowFontScaling: true,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              style: {
                backgroundColor: '#2B1A2F',
                padding: 10,
                height: 70,
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
