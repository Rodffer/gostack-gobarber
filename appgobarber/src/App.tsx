import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './Routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#18121e" />
    <View style={{ flex: 1, backgroundColor: '#18121e' }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
