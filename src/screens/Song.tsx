import { useMemo, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack'; // Import stack navigation
import { NavigationContainer } from '@react-navigation/native'; // Import navigation container
import { defaultStyles } from '../../styles/index'; // Your default styles
import { useNavigationSearch } from '../hooks/useNavigationSearch'
import { colors } from '../../constants/tokens';
import { trackTitleFilter } from '../helper/filter'
import { screenPadding } from '../../constants/tokens'
import { useTracks } from '../store/library'
import { TracksList } from '../components/TrackList'
import { generateTracksListId } from '../helper/miscellaneous'
import { ScrollView, View, TextInput, StyleSheet } from 'react-native'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import SongsScreenIndex from './SongScreenIndex';
//import { StackScreenWithSearchBar } from '../../constants/layout'

// Create stack navigator
const Stack = createStackNavigator();

const StackScreenWithSearchBar = {
  headerLargeTitle: true,
  headerLargeStyle: {
    backgroundColor: 'red',
  },
  headerLargeTitleStyle: {
    color: colors.text,
  },
  headerTintColor: colors.text,
  headerTransparent: true,
  headerBlurEffect: 'prominent',
  headerShadowVisible: false,
};


const SongScreenLayout = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Songs"
          component={SongsScreenIndex} // Component to be rendered for this screen
          options={{
            
           //headerTintColor: '#444', 
           headerStyle: {
            backgroundColor: '#000', // Set a custom background color (dark gray)
            shadowColor: 'transparent', // Remove any shadow
          },
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
            color: '#fff', // Set title text color to white
          },
          }}
        />
      </Stack.Navigator>
  );
};



export default SongScreenLayout;
