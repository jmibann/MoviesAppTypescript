import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home, {Movie} from '../screens/Landing';
import MovieDetails from '../screens/MovieDetails';

type RootStackParamList = {
  Home: undefined;
  MovieDetails: {movie: Movie};
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{title: 'Movies'}} />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{title: 'Movie Details'}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
