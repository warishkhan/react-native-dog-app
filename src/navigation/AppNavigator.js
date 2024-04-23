import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DogBreedListScreen from '../screens/DogBreedListScreen';
import DogImagesScreen from '../screens/DogImagesScreen';
import ContactScreen from '../screens/ContactScreen';
import SubBreedsScreen from '../screens/SubBreedsScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const DogBreedStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Dog Breeds" component={DogBreedListScreen} options={{ title: 'Dog Breeds',
    headerStyle: {
            backgroundColor: '#138781',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:25
          },
          headerTitleAlign:"center",
     }} />
    <Stack.Screen name="SubBreeds" component={SubBreedsScreen} options={{ title: 'Sub-Breeds',
    headerStyle: {
            backgroundColor: '#138781',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:25
          },
          headerTitleAlign:"center",
     }}/>
    <Stack.Screen name="DogImages" component={DogImagesScreen} options={{ title: 'Dog Images',
    headerStyle: {
            backgroundColor: '#138781',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:25
          },
          headerTitleAlign:"center",
     }}/>
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <Tab.Navigator 


screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Screen1') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Screen2') {
            iconName = focused ? 'ios-settings' : 'ios-settings-outline';
          }

        },
        tabBarActiveTintColor: '#fff', 
        tabBarInactiveTintColor: '#000', 
        tabBarStyle: {
          backgroundColor: '#138781',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight:'500',
          paddingBottom: 2,
        },
      })}
    >
      <Tab.Screen name="Dog Breed" component={DogBreedStack} options={{
        headerShown:false,
        tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
      }} />
      <Tab.Screen name="Contact" component={ContactScreen} options={{
        tabBarLabel: 'Contact', // Label for the tab
          tabBarIcon: ({ color, size }) => (
            <Icon name="envelope-square" size={size} color={color} />
          ),
          headerStyle: {
            backgroundColor: '#138781',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:25
          },
          headerTitleAlign:"center",
      }}/>
    </Tab.Navigator>
  );
};

export default AppNavigator;
