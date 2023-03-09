import React from 'react'

import {Colors} from './../components/styles';
const {primary, tertiary, brand} = Colors;
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from './../screens/Profile';
import Game from './../screens/Game';
import News from './../screens/News';
import Search from './../screens/Search';

//Screen names
const profileName = "Profile";
const gameName = "Game";
const newsName = "News";
const searchName = "Search";

const Tab = createBottomTabNavigator();

const Logged = ({navigation}) => {
    return (
        <Tab.Navigator
        initialRouteName={profileName}
        screenOptions={({ route }) => ({
          "tabBarActiveTintColor": brand,
          "tabBarInactiveTintColor": tertiary,
          "tabBarLabelStyle": {
            "marginTop": -10,
            "fontSize": 12
          },
          headerShown: false,
          tabBarStyle: {backgroundColor: "#000000", height: 90, borderRadius: 10, borderTopWidth: 0, position: 'absolute'},
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === gameName) {
              iconName = focused ? 'game-controller' : 'game-controller-outline';
            } else if (rn === newsName) {
              iconName = focused ? 'newspaper' : 'newspaper-outline';
            } else if (rn === searchName) {
              iconName = focused ? 'search' : 'search-outline';
            } else if (rn == profileName) {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={30} color={color} />;
          },
        })}>

        <Tab.Screen name={gameName} component={Game} />
        <Tab.Screen name={newsName} component={News} />
        <Tab.Screen name={searchName} component={Search} />
        <Tab.Screen name={profileName} component={Profile} />

      </Tab.Navigator>
    )
}

export default Logged;