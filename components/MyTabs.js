import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import CalendarScreen from "../screens/CalendarScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ToolScreen from "../screens/ToolScreen";

const Tab = createBottomTabNavigator();
export default function MyTabs({ navigation }) {
    return (
        <Tab.Navigator
          screenOptions={({ route, navigation }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Calendar') {
                iconName = focused ? 'calendar' : 'calendar-outline';
                } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
                }else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
                }else if (route.name === 'Tools') {
                iconName = focused ? 'leaf' : 'leaf-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                <Ionicons name="notifications-outline" size={24} style={{ marginRight: 20 }} />
              </TouchableOpacity>
            ),
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Calendar" component={CalendarScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Tools" component={ToolScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      );
}