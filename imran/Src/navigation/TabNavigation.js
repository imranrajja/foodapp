import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image} from 'react-native'
import Login from '../screen/Login';
import SignUp from '../screen/SignUp';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="TabNavigation"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',

      }}
    >
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: () => (
            <Image source={require('../assest/icon/home.png')} style={{width:30,height:30}}/>
          )
        
          
        }}
      />
      <Tab.Screen
        name="SignUp"
        component={SignUp}
        options={{
          tabBarLabel: 'SignUp',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="bell" color={color} size={size} />
          // ),
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
}
export default TabNavigation