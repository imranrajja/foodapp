import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStart from '../screen/GetStart';
import Login from '../screen/Login';
import Signup from '../screen/Signup';
import OTP from '../screen/OTP';
import User from '../screen/User';
import EDIT from '../screen/EDIT';
import Favourites from '../screen/Favourites';
import Setting from '../screen/Setting';
import Address from '../screen/Address';
import Offers from '../screen/Offers';
import Help from '../screen/Help';
import Delivery from '../screen/Delivery';
import MYCARD from '../screen/MYCARD';
import FOODMENU from '../screen/FOODMENU';
import UPTOORDER from '../screen/UPTOORDER';
import Ordernow from '../screen/Ordernow';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='TabNavigation' >
                <Stack.Screen name='GetStart' component={GetStart} />
                <Stack.Screen name='User' component={User} options={{ headerShown: false }} />
                <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='OTP' component={OTP} options={{ headerShown: false }} />
                <Stack.Screen name='EDIT' component={EDIT} options={{ headerShown: false }} />
                <Stack.Screen name='Favourites' component={Favourites} options={{ headerShown: false }} />
                <Stack.Screen name='Setting' component={Setting} options={{ headerShown: false }} />
                <Stack.Screen name='Address' component={Address} options={{ headerShown: false }} />
                <Stack.Screen name='Offers' component={Offers} options={{ headerShown: false }} />
                <Stack.Screen name='Help' component={Help} options={{ headerShown: false }} />
                <Stack.Screen name='Delivery' component={Delivery} options={{ headerShown: false }} />
                <Stack.Screen name='MYCARD' component={MYCARD} options={{ headerShown: false }} />
                <Stack.Screen name='FOODMENU' component={FOODMENU} options={{ headerShown: false }} />
                <Stack.Screen name='UPTOORDER' component={UPTOORDER} options={{ headerShown: false }} />
                <Stack.Screen name='Ordernow' component={Ordernow} options={{ headerShown: false }} />
                <Stack.Screen name='TabNavigation' component={TabNavigation}/>







            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigation;