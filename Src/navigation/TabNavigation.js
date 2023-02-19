import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet,Text}from 'react-native'

// import imgPath from '../assest';
import { Image } from 'react-native';
import react from 'react';
import FOODMENU from '../screen/FOODMENU';
import Delivery from '../screen/Delivery';
import Ordernow from '../screen/Ordernow';
import UPTOORDER from '../screen/UPTOORDER';
import GetStart from "../screen/GetStart"


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="GetStart"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'blue',
        tabBarActiveBackgroundColor: 'red',
        tabBarInactiveBackgroundColor: 'pink',
        headerTintColor: 'blue',

      }}
    >
      <Tab.Screen
        name="GetStart"
        component={GetStart}
        options={{
          // tabBarIcon: () => (<Image source={imgPath.img5} />),
          tabBarLabel: 'GetStart',
          tabBarBadge: 20,
          


        }}
      />
      <Tab.Screen
        name="Delivery"
        component={Delivery}
        options={{
          // tabBarIcon: () => (<Image source={imgPath.img6} />),
          tabBarLabel: 'Delivery',
          tabBarBadge: 35,

        }}

      />
      <Tab.Screen
        name="Ordernow"
        component={Ordernow}
        options={{
          // tabBarIcon: () => (<Image source={imgPath.img7} />),
          tabBarLabel: 'Ordernow',

        }}
      />
      <Tab.Screen
        name=" UPTOORDER"
        component={UPTOORDER}
        options={{
          // tabBarIcon: () => (<Image source={imgPath.img8} />),
          tabBarLabel: 'UPTOORDER',


        }}
      />
    </Tab.Navigator>
  );
}
export default TabNavigation;