import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Service from '../pages/Service';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#FCD0D3' },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="Dashboard" component={Dashboard} />
    <Auth.Screen name="Service" component={Service} />
  </Auth.Navigator>
);

export default AuthRoutes;
