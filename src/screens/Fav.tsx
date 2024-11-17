import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; // Import stack navigation
import { NavigationContainer } from '@react-navigation/native'; // Import navigation container
import { View } from 'react-native';
import { StackScreenWithSearchBar } from '../../constants/header'; // Custom header options
import { defaultStyles } from '../../styles/index'; // Your default styles

// Create stack navigator
const Stack = createStackNavigator();

const Fav = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Fav"
          component={FavScreen} // Component to be rendered for this screen
          options={{
            ...StackScreenWithSearchBar,
            headerTitle: 'Favorites', // Set custom header title
          }}
        />
      </Stack.Navigator>
  );
};

// Songs screen content component
const FavScreen = () => {
  return (
    <View style={defaultStyles.container}>
      {/* Your content for Songs screen */}
    </View>
  );
};

export default Fav;
