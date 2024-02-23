import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import NotificationScreen from '../screens/NotificationScreen'; // Adjust the path as necessary
import MyTabs from './MyTabs';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{ headerShown: false }} // Hide header for tabs, as you might handle it individually within tabs
      />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
    </Stack.Navigator>
  );
}