import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabBar from './src/tabs/layout';

export default function App() {
  return (
    <NavigationContainer>
      <TabBar />
    </NavigationContainer>
  );
}
