import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Platform } from 'react-native';
import {colors, fontSize} from '../../constants/tokens'
import { StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import Fav from '../screens/Fav';
import PlayList from '../screens/PlayList';
import SongsScreenLayout from '../screens/Song';
import Artist from '../screens/Artist';

const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        headerShown:false,
        tabBarLabelStyle: {
          fontSize: fontSize.xs,
          fontWeight: '500',
        },
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 0,
          paddingTop: 8,
          bottom: Platform.OS === 'ios' ? 0 : 0,
          height:Platform.OS === 'ios' ? 80 : 70
        },
        tabBarBackground: () => (
          <BlurView
            style={{
              ...StyleSheet.absoluteFillObject,
              overflow: 'hidden',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
            blurType="dark"   // Choose blur type: 'light', 'dark', 'extraLight', etc.
            blurAmount={30}     // Adjust blur amount as needed
            reducedTransparencyFallbackColor="transparent" // Fallback color for unsupported devices
          />
        ),
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;

          if (route.name === 'Favorites') {
            iconSource = focused
              ? require('../assets/icons/heart.png')
              : require('../assets/icons/heart.png');
          } else if (route.name === 'PlayLists') {
            iconSource = focused
              ? require('../assets/icons/playlist.png')
              : require('../assets/icons/playlist.png');
          } else if (route.name === 'Songs') {
            iconSource = focused
              ? require('../assets/icons/song.png')
              : require('../assets/icons/song.png');
          } else if (route.name === 'Artists') {
            iconSource = focused
              ? require('../assets/icons/artist.png')
              : require('../assets/icons/artist.png');
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: size,
                height: size,
                tintColor: color, // Optional: Applies the active/inactive color
              }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Favorites" component={Fav} />
      <Tab.Screen name="PlayLists" component={PlayList} />
      <Tab.Screen name="Songs" component={SongsScreenLayout} />
      <Tab.Screen name="Artists" component={Artist} />
    </Tab.Navigator>
  );
};

export default TabsNavigation;
