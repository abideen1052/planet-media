import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import ShareScreen from '../screens/share';
import GalleryScreen from '../screens/gallery';
import { TabBarIcon } from './component/tabBarIcon';
import { MenuButton } from './component/menuButton';
import colors from '../themes/color';

const Tab = createBottomTabNavigator();

const renderTabBarIcon = (routeName: string) => {
  return <TabBarIcon routeName={routeName} />;
};

const renderMenuButton = () => {
  return <MenuButton />;
};

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => renderTabBarIcon(route.name),
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 55,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          paddingBottom: 10,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarIconStyle: {
          marginTop: 7,
        },
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.white,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Gallery" component={GalleryScreen} />
      <Tab.Screen
        name="Menu"
        component={View}
        options={{
          tabBarButton: renderMenuButton,
        }}
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
      />
      <Tab.Screen name="Share" component={ShareScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
