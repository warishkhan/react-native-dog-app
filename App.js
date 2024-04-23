import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { BreedProvider } from './src/contexts/BreedContext';

const App = () => {
  return (
    <BreedProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </BreedProvider>
  );
};

export default App;
