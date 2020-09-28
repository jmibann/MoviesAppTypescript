import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Landing';

type RootStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{title: 'Movies'}} />
    </Stack.Navigator>
  );
};

export default RootStack;
