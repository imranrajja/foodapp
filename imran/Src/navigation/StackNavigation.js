import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/Login';
import SignUp from '../screen/SignUp';
import TabNavigation from './TabNavigation';
import Logged from '../screen/Logged';
import Register from '../screen/Register';

const Stack = createNativeStackNavigator();

const  StackNavigation =() => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='SignUp' >
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Logged" component={Logged} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={Register}options={{headerShown:false}}  />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;