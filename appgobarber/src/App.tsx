import React from 'react';
import { View, StatusBar } from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#112a4a" />
    <View style={{ flex: 1, backgroundColor: '#112a4a' }} />
  </>
);

export default App;
