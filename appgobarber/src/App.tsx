import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './Routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#112a4a" />
    <View style={{ flex: 1, backgroundColor: '#112a4a' }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
