import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import { DASHBOARD_ROUTE } from './routes';

const Stack = createStackNavigator();

const AuthRouter: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e38' },
      }}
    >
      <Stack.Screen name={DASHBOARD_ROUTE} component={Dashboard} />
    </Stack.Navigator>
  );
};

export default AuthRouter;
